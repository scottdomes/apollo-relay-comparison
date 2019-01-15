/**
 * @flow
 * @relayHash 0a81138c726afeac30f7a6b02b60f943
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelayAppQueryVariables = {||};
export type RelayAppQueryResponse = {|
  +contacts: ?$ReadOnlyArray<?{|
    +name: string,
    +email: ?string,
  |}>
|};
export type RelayAppQuery = {|
  variables: RelayAppQueryVariables,
  response: RelayAppQueryResponse,
|};
*/


/*
query RelayAppQuery {
  contacts {
    name
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "contacts",
    "storageKey": null,
    "args": null,
    "concreteType": "Contact",
    "plural": true,
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "RelayAppQuery",
  "id": null,
  "text": "query RelayAppQuery {\n  contacts {\n    name\n    email\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RelayAppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "RelayAppQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e5d3600a0d4f75df02ed126304e05b36';
module.exports = node;
