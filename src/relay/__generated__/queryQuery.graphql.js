/**
 * @flow
 * @relayHash 12872a9bdabad706d74e0a2a2ff081ea
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type queryQueryVariables = {||};
export type queryQueryResponse = {|
  +viewer: ?{|
    +id: string,
    +allContacts: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +email: ?string,
        |}
      |}>
    |},
  |}
|};
export type queryQuery = {|
  variables: queryQueryVariables,
  response: queryQueryResponse,
|};
*/


/*
query queryQuery {
  viewer {
    id
    allContacts(first: 1000) {
      edges {
        node {
          id
          name
          email
          __typename
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ContactEdge",
    "plural": true,
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
          v0,
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null
      }
    ]
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "queryQuery",
  "id": null,
  "text": "query queryQuery {\n  viewer {\n    id\n    allContacts(first: 1000) {\n      edges {\n        node {\n          id\n          name\n          email\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "viewer",
          "allContacts"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "queryQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": "allContacts",
            "name": "__Main_allContacts_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "ContactConnection",
            "plural": false,
            "selections": v1
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "queryQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allContacts",
            "storageKey": "allContacts(first:1000)",
            "args": v2,
            "concreteType": "ContactConnection",
            "plural": false,
            "selections": v1
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allContacts",
            "args": v2,
            "handle": "connection",
            "key": "Main_allContacts",
            "filters": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e30cad2e6f182f40623ab451f3776188';
module.exports = node;
