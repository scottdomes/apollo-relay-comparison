/**
 * @flow
 * @relayHash c101e80a8d06f898b806b4dbdecbb7c6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelayAppQueryVariables = {||};
export type RelayAppQueryResponse = {|
  +contacts: ?$ReadOnlyArray<?{|
    +id: string,
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
    id
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
        "name": "id",
        "args": null,
        "storageKey": null
      },
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
  "text": "query RelayAppQuery {\n  contacts {\n    id\n    name\n    email\n  }\n}\n",
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
(node/*: any*/).hash = '9db116a00e9a2243f51488906067f109';
module.exports = node;
