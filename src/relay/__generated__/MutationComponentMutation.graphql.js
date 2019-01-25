/**
 * @flow
 * @relayHash a67890b5967884c3bd83c9e8782eeada
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
      +node: ?{|
        +id: string,
        +email: ?string,
        +name: string,
      |}
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
  "text": "mutation MutationComponentMutation(\n  $input: ContactInput!\n) {\n  createContact(input: $input) {\n    contactEdge {\n      node {\n        id\n        email\n        name\n      }\n    }\n  }\n}\n",
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
(node/*: any*/).hash = 'e581d7918bb30089be0919dd05f119be';
module.exports = node;
