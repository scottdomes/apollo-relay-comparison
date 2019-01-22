/**
 * @flow
 * @relayHash a97a4b722d5012e44976261409054b2b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContactInput = {
  name: string,
  email?: ?string,
};
export type MutationComponentMutationVariables = {|
  input: ContactInput
|};
export type MutationComponentMutationResponse = {|
  +createContact: ?{|
    +contactEdge: ?{|
      +__typename: string,
      +cursor: string,
      +node: ?{|
        +id: string,
        +email: ?string,
        +name: string,
      |},
    |}
  |}
|};
export type MutationComponentMutation = {|
  variables: MutationComponentMutationVariables,
  response: MutationComponentMutationResponse,
|};
*/


/*
mutation MutationComponentMutation(
  $input: ContactInput!
) {
  createContact(input: $input) {
    contactEdge {
      __typename
      cursor
      node {
        id
        email
        name
      }
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
        "name": "contactEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "ContactEdge",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Contact",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "MutationComponentMutation",
  "id": null,
  "text": "mutation MutationComponentMutation(\n  $input: ContactInput!\n) {\n  createContact(input: $input) {\n    contactEdge {\n      __typename\n      cursor\n      node {\n        id\n        email\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MutationComponentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "MutationComponentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7f25554a943ee2f1a5a36576d3509ca2';
module.exports = node;
