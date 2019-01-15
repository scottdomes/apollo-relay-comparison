/**
 * @flow
 * @relayHash a56b6508ae863349230347746e2caaff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContactInput = {
  name: string,
  email?: ?string,
};
export type RelayAppMutationVariables = {|
  input: ContactInput
|};
export type RelayAppMutationResponse = {|
  +createContact: ?{|
    +contact: {|
      +name: string,
      +email: ?string,
    |}
  |}
|};
export type RelayAppMutation = {|
  variables: RelayAppMutationVariables,
  response: RelayAppMutationResponse,
|};
*/


/*
mutation RelayAppMutation(
  $input: ContactInput!
) {
  createContact(input: $input) {
    contact {
      name
      email
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ContactInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createContact",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "ContactInput!"
      }
    ],
    "concreteType": "CreateContactPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "contact",
        "storageKey": null,
        "args": null,
        "concreteType": "Contact",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RelayAppMutation",
  "id": null,
  "text": "mutation RelayAppMutation(\n  $input: ContactInput!\n) {\n  createContact(input: $input) {\n    contact {\n      name\n      email\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RelayAppMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RelayAppMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f4ce72b74e494764176b79783539f9f9';
module.exports = node;
