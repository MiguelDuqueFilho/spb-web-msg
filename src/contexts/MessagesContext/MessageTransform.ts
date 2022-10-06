import React, { ReactNode } from 'react';
import uuid from 'react-uuid';
import { toast } from 'react-toastify';

import { isObjectArray } from '../../util/util';
import { BCMSG } from '../../components/SPB/BCMSG';
import { Choice } from '../../components/SPB/Choice';
import { DOC } from '../../components/SPB/DOC';
import { Group } from '../../components/SPB/Group';
import { InputXsBase } from '../../components/SPB/InputXsBase';

import { Message } from '../../components/SPB/Message';
import { Schema } from '../../components/SPB/Schema';
import { SISMSG } from '../../components/SPB/SISMSG';
import { USERMSG } from '../../components/SPB/USERMSG';

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
    case 'schema': {
      resultHtml = React.createElement(Schema, { key: uuid(), ...properties }, [
        childObj,
      ]);
      break;
    }
    case 'choice': {
      resultHtml = React.createElement(Choice, { key: uuid(), ...properties }, [
        childObj,
      ]);
      break;
    }
    case 'sequence': {
      break;
    }
    case 'element': {
      if (tagRefhtml !== '') {
        switch (tagRefhtml) {
          case 'DOC': {
            resultHtml = React.createElement(
              DOC,
              { key: uuid(), ...properties },
              [childObj]
            );

            break;
          }
          case 'BCMSG': {
            resultHtml = React.createElement(
              BCMSG,
              { key: uuid(), ...properties },
              [childObj]
            );

            break;
          }
          case 'SISMSG': {
            resultHtml = React.createElement(
              SISMSG,
              { key: uuid(), ...properties },
              [childObj]
            );

            break;
          }
          case 'USERMSG': {
            resultHtml = React.createElement(
              USERMSG,
              { key: uuid(), ...properties },
              [childObj]
            );
            break;
          }
          case 'Message': {
            resultHtml = React.createElement(
              Message,
              { key: uuid(), ...properties },
              [childObj]
            );

            break;
          }
          case 'Group': {
            resultHtml = React.createElement(
              Group,
              { key: uuid(), ...properties },
              [childObj]
            );

            break;
          }
          case 'InputXsString':
          case 'InputXsInteger':
          case 'InputXsDecimal':
          case 'InputXsDate':
          case 'InputXsDateTime': {
            if (properties.name === 'USERMSG') {
              resultHtml = React.createElement(
                USERMSG,
                { key: uuid(), ...properties },
                [childObj]
              );
            } else {
              resultHtml = React.createElement(
                InputXsBase,
                { key: uuid(), ...properties },
                [childObj]
              );
            }
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
    default: {
      break;
    }
  }
  // console.log(`-----------  resultHtml ----------------`);
  // console.log(resultHtml);
  // console.log(`-----------  resultHtml -----------fim-`);
  return resultHtml;
}

async function IterateSchemaObject(
  obj: any,
  stack: any = 'DOC.',
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
        // console.log(`resultChildHtml 1 ${property}`);
        // console.log(resultChildHtml);
        // console.log(`createHtmlElement 1 ${property}`);
        resultHtml = await createHtmlElement(
          property,
          obj[property],
          resultChildHtml
        );
        // console.log(`resultHtml 1 ${property}`);
        // console.log(resultHtml);
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
          // console.log(`resultChildHtml 2 ${property} `);
          // console.log(resultChildHtml);
          // console.log(`createHtmlElement 2 push ${property}`);
          resultHtml.push(
            await createHtmlElement(prevItem, obj[property], resultChildHtml)
          );
          // console.log(`resultHtml 2 ${property} `);
          // console.log(obj[property]);
          // console.log(resultHtml);
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
          // console.log(`resultChildHtml 3 ${property}`);
          // console.log(resultChildHtml);
          // console.log(`createHtmlElement 3 ${property}`);
          resultHtml = await createHtmlElement(
            property,
            obj[property],
            resultChildHtml
          );
          // console.log(`resultHtml 3 ${property}`);
          // console.log(resultHtml);
        }
      }
      // else {
      //   console.log(`resultHtml null ${property} resultHtml `);
      //   console.log(resultHtml);
      //   // resultHtml = null;
      // }
    }
  }
  // console.log(`resultHtml final do iterate `);
  // console.log(resultHtml);
  return resultHtml;
}

export async function CreateMessageComponent(obj: object) {
  const htmlDoc = await IterateSchemaObject(obj);
  // console.log(htmlDoc);
  return htmlDoc;
}
