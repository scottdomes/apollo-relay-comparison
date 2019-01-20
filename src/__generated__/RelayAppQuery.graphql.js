/**
 * @flow
 * @relayHash 004539b1a5f015671838c3f497fb3d4e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelayAppQueryVariables = {||};
export type RelayAppQueryResponse = {|
  +viewer: ?{|
    +allContacts: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: string,
          +email: ?string,
        |}
      |}>
    |}
  |}
|};
export type RelayAppQuery = {|
  variables: RelayAppQueryVariables,
  response: RelayAppQueryResponse,
|};
*/


/*
query RelayAppQuery {
  viewer {
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
var v0 = [
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
v1 = [
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
  "name": "RelayAppQuery",
  "id": null,
  "text": "query RelayAppQuery {\n  viewer {\n    allContacts(first: 1000) {\n      edges {\n        node {\n          id\n          name\n          email\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n",
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
    "name": "RelayAppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "allContacts",
            "name": "__RelayApp_allContacts_connection",
            "storageKey": null,
            "args": null,
            "concreteType": "ContactConnection",
            "plural": false,
            "selections": v0
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RelayAppQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allContacts",
            "storageKey": "allContacts(first:1000)",
            "args": v1,
            "concreteType": "ContactConnection",
            "plural": false,
            "selections": v0
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allContacts",
            "args": v1,
            "handle": "connection",
            "key": "RelayApp_allContacts",
            "filters": null
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '52d68b8d217666449a851aafaaef6f1d';
module.exports = node;
