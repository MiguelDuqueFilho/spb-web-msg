import React, { ReactNode } from 'react';
import { toast } from 'react-toastify';
import uuid from 'react-uuid';

import { isObjectArray } from '../util/util';
import { BCMSG } from './SPB/BCMSG';
import { Choice } from './SPB/Choice';
import { DOC } from './SPB/DOC';
import { Group } from './SPB/Group';
import { InputXsDate } from './SPB/InputXsDate';
import { InputXsDateTime } from './SPB/InputXsDateTime';
import { InputXsDecimal } from './SPB/InputXsDecimal';
import { InputXsInteger } from './SPB/InputXsInteger';
import { InputXsString } from './SPB/InputXsString';
import { Message } from './SPB/Message';
import { Schema } from './SPB/Schema';
import { SISMSG } from './SPB/SISMSG';
import { USERMSG } from './SPB/USERMSG';

async function createHtmlElement(
  itemName: string,
  objElement: any,
  childObj: ReactNode = null
): Promise<ReactNode> {
  let resultHtml: ReactNode = childObj;
  let properties: object | any = {};
  let tagRefhtml: string | number = '';

  for (const property in objElement) {
    const objElementLevel = objElement[property];
    if (
      typeof objElementLevel === 'string' ||
      typeof objElementLevel === 'number'
    ) {
      properties = { ...properties, [property]: objElementLevel };

      if (property === 'tagRef') {
        tagRefhtml = objElementLevel;
      }
    } else {
      if (property === 'InfRegra') {
        properties = { ...properties, [property]: objElementLevel };
      }
    }
  }

  switch (itemName) {
    case 'schema':
      resultHtml = React.createElement(
        Schema,
        { key: 'schema', ...properties },
        [childObj]
      );

      break;
    case 'choice':
      resultHtml = React.createElement(Choice, { key: uuid(), ...properties }, [
        childObj,
      ]);
      break;

    case 'sequence':
      break;

    case 'element': {
      if (tagRefhtml !== '') {
        switch (tagRefhtml) {
          case 'DOC': {
            resultHtml = React.createElement(
              DOC,
              { key: 'DOC', ...properties },
              [childObj]
            );
            break;
          }
          case 'BCMSG': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              BCMSG,
              { key: xmlStack, ...properties },
              [childObj]
            );
            break;
          }
          case 'SISMSG': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              SISMSG,
              { key: xmlStack, ...properties },
              [childObj]
            );
            break;
          }
          case 'USERMSG': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              USERMSG,
              { key: xmlStack, ...properties },
              [childObj]
            );
            break;
          }
          case 'Message': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              Message,
              { key: xmlStack, ...properties },
              [childObj]
            );

            break;
          }
          case 'Group': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              Group,
              { key: xmlStack, ...properties },
              [childObj]
            );
            break;
          }
          case 'InputXsString': {
            const { xmlStack } = properties;
            if (properties.name === 'USERMSG') {
              resultHtml = React.createElement(
                USERMSG,
                { key: xmlStack, ...properties },
                [childObj]
              );
            } else {
              resultHtml = React.createElement(
                InputXsString,
                { key: xmlStack, ...properties },
                [childObj]
              );
            }
            console.log(resultHtml);
            break;
          }
          case 'InputXsInteger': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              InputXsInteger,
              { key: xmlStack, ...properties },
              [childObj]
            );
            break;
          }
          case 'InputXsDecimal': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              InputXsDecimal,
              { key: xmlStack, ...properties },
              [childObj]
            );
            break;
          }
          case 'InputXsDate': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              InputXsDate,
              { key: xmlStack, ...properties },
              [childObj]
            );
            break;
          }
          case 'InputXsDateTime': {
            const { xmlStack } = properties;
            resultHtml = React.createElement(
              InputXsDateTime,
              { key: xmlStack, ...properties },
              [childObj]
            );
            break;
          }
          default: {
            toast.error(`tagRef ${tagRefhtml} invalid.`);
            break;
          }
        }
      }
      break;
    }
  }
  return resultHtml;
}

async function IterateSchemaObject(
  obj: any,
  stack: any = 'DOC',
  prevType: string = '',
  prevItem: string = ''
): Promise<ReactNode> {
  let resultHtml: any = [];

  for (const property in obj) {
    if (isObjectArray(obj[property])) {
      // console.log(
      //   `${property} (L=${obj[property].length}) is an array with parent ${prevType} - ${stack}`
      // );
      if (obj[property].length !== 0) {
        const resultChildHtml = await IterateSchemaObject(
          obj[property],
          stack + property,
          'array',
          property
        );
        // console.log(
        //   `return (L=${obj[property].length}) IterateSchemaObject property: ${property}`
        // );

        resultHtml = await createHtmlElement(
          property,
          obj[property],
          resultChildHtml
        );
      }
    } else {
      if (
        typeof obj[property] !== 'string' &&
        typeof obj[property] !== 'number'
      ) {
        if (prevType === 'array') {
          // console.log(
          //   `${stack}[${property}] is an object, item of ${prevType} ${stack}`
          // );

          const resultChildHtml = await IterateSchemaObject(
            obj[property],
            stack + '[' + property + '].',
            'object',
            prevItem
          );
          // console.log(
          //   `return item Array IterateSchemaObject property: ${property}`
          // );

          resultHtml.push(
            await createHtmlElement(prevItem, obj[property], resultChildHtml)
          );
        } else {
          // console.log(
          //   `${stack}${property} is ${typeof obj[
          //     property
          //   ]} with parent ${prevType} ${stack}`
          // );

          const resultChildHtml = await IterateSchemaObject(
            obj[property],
            stack + property + '.',
            'object',
            prevItem
          );

          resultHtml = await createHtmlElement(
            property,
            obj[property],
            resultChildHtml
          );
        }
      } else {
        resultHtml = null;
      }
    }
  }

  return resultHtml;
}

export async function CreateMessageComponent(obj: object) {
  const htmlDoc = await IterateSchemaObject(obj);
  // console.log(htmlDoc);
  return htmlDoc;
}
