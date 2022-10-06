import React, { useState, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/axios';
import { isObjectArray } from '../../util/util';
import { BCMSG } from '../SPB/BCMSG';
import { Choice } from '../SPB/Choice';
import { DOC } from '../SPB/DOC';
import { InputXsDate } from '../SPB/InputXsDate';
import { InputXsDateTime } from '../SPB/InputXsDateTime';
import { InputXsDecimal } from '../SPB/InputXsDecimal';
import { InputXsInteger } from '../SPB/InputXsInteger';
import { InputXsString } from '../SPB/InputXsString';
import { Message } from '../SPB/Message';
import { Schema } from '../SPB/Schema';
import { SISMSG } from '../SPB/SISMSG';
import uuid from 'react-uuid';
import { USERMSG } from '../SPB/USERMSG';
import { Group } from '../SPB/Group';

function MessageBody() {
  const [message, setMessage] = useState<ReactNode>(<div>init</div>);

  async function createHtmlElement(
    itemName: string,
    objElement: any,
    childObj: ReactNode = null
  ): Promise<ReactNode> {
    let resultHtml: ReactNode = childObj;
    let properties: object | any = {};
    let tagRefhtml: string | number = '';
    // console.log(
    //   `=============== createHtmlElement objElement =================`
    // );
    // console.log(objElement);

    for (const property in objElement) {
      const objElementLevel = objElement[property];
      if (
        typeof objElementLevel === 'string' ||
        typeof objElementLevel === 'number'
      ) {
        // console.log(`=== string or number objElementLevel`);
        // console.log(`property ${property} objElementLevel ${objElementLevel}`);
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
        // console.log(`=============== case schema =================`);
        resultHtml = React.createElement(
          Schema,
          { key: uuid(), ...properties },
          [childObj]
        );
        // console.log(resultHtml);
        break;
      case 'choice':
        // console.log(`=============== case choice =================`);
        // console.log(objElement);
        resultHtml = React.createElement(
          Choice,
          { key: uuid(), ...properties },
          [childObj]
        );
        break;

      case 'sequence':
        break;

      case 'element': {
        // console.log(`=============== case element =================`);
        // console.log(`objElement`);
        // console.log(objElement);
        // console.log(`tagRefhtml`);
        // console.log(tagRefhtml);
        // console.log(`properties`);
        // console.log(properties);
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
            case 'InputXsString': {
              if (properties.name === 'USERMSG') {
                resultHtml = React.createElement(
                  USERMSG,
                  { key: uuid(), ...properties },
                  [childObj]
                );
              } else {
                resultHtml = React.createElement(
                  InputXsString,
                  { key: uuid(), ...properties },
                  [childObj]
                );
              }
              break;
            }
            case 'InputXsInteger': {
              resultHtml = React.createElement(
                InputXsInteger,
                { key: uuid(), ...properties },
                [childObj]
              );
              break;
            }
            case 'InputXsDecimal': {
              resultHtml = React.createElement(
                InputXsDecimal,
                { key: uuid(), ...properties },
                [childObj]
              );
              break;
            }
            case 'InputXsDate': {
              resultHtml = React.createElement(
                InputXsDate,
                { key: uuid(), ...properties },
                [childObj]
              );
              break;
            }
            case 'InputXsDateTime': {
              resultHtml = React.createElement(
                InputXsDateTime,
                { key: uuid(), ...properties },
                [childObj]
              );
              break;
            }
            default: {
              // console.log(`tagRef ${tagRefhtml} invalid.`);
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
    stack: any = '',
    prevType: string = '',
    prevItem: string = ''
  ): Promise<ReactNode> {
    let resultHtml: any = [];
    // console.log(
    //   `------------------------------------ ini IterateSchemaObject --------------------------------------  ${stack}`
    // );
    for (const property in obj) {
      if (isObjectArray(obj[property])) {
        // console.log(
        //   `${property} (L=${obj[property].length}) is an array with parent ${prevType} - ${stack}`
        // );
        if (obj[property].length !== 0) {
          // console.log(`ObjectArray property: ${property}`);
          // console.log(`${prevType} prevItem: ${prevItem}`);
          // console.log(obj[property]);
          const resultChildHtml = await IterateSchemaObject(
            obj[property],
            stack + property,
            'array',
            property
          );
          // console.log(
          //   `return (L=${obj[property].length}) IterateSchemaObject property: ${property}`
          // );
          // console.log(resultChildHtml);
          resultHtml = await createHtmlElement(
            property,
            obj[property],
            resultChildHtml
          );
          // console.log(`resultHtml createHtmlElement `);
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
            // console.log(`${prevType} prevItem: ${prevItem}`);
            // console.log(obj[property]);

            const resultChildHtml = await IterateSchemaObject(
              obj[property],
              stack + '[' + property + '].',
              'object',
              prevItem
            );
            // console.log(
            //   `return item Array IterateSchemaObject property: ${property}`
            // );
            // console.log(resultChildHtml);
            resultHtml.push(
              await createHtmlElement(prevItem, obj[property], resultChildHtml)
            );
          } else {
            // console.log(
            //   `${stack}${property} is ${typeof obj[
            //     property
            //   ]} with parent ${prevType} ${stack}`
            // );
            // console.log(`ObjectObject property: ${property}`);
            // console.log(`${prevType} prevItem: ${prevItem}`);
            // console.log(obj[property]);
            const resultChildHtml = await IterateSchemaObject(
              obj[property],
              stack + property + '.',
              'object',
              prevItem
            );
            // console.log(
            //   `return Object IterateSchemaObject property: ${property}`
            // );
            // console.log(resultChildHtml);
            resultHtml = await createHtmlElement(
              property,
              obj[property],
              resultChildHtml
            );
          }
        } else {
          resultHtml = null;
          // console.log(`elseelseelseelseelseelseelseelseelseelseelseelse`);
          // console.log(`${stack}[${property}] =  ${obj[property]}`);
          //   if (prevType === 'array') {
          //     console.log(`${stack}[${property}] =  ${obj[property]}`);
          //   } else {
          //     console.log(`${stack}${property} =  ${obj[property]}`);
          //   }
        }
      }
    }
    // console.log(
    //   `------------------------------------ Fim IterateSchemaObject -------------------------------------- `
    // );
    // console.log(resultHtml);
    return resultHtml;
  }

  async function getMessage() {
    const response = await api.get('/convert-xsd/bmc0253');

    const htmlDoc = await IterateSchemaObject(response.data);
    // toast(JSON.stringify(response.data, null, 2));
    // setMessage(await CreateHtmlMessage(response.data));
    setMessage(htmlDoc);
  }

  return (
    <div>
      {message}
      <button className="temp" onClick={getMessage}>
        get msg
      </button>
    </div>
  );
}
