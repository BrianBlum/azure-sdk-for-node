/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the VMCostProperties class.
 * @constructor
 * @member {string} [name]
 * 
 * @member {string} [resourceGroupName]
 * 
 * @member {number} [cost]
 * 
 */
function VMCostProperties() {
}

/**
 * Defines the metadata of VMCostProperties
 *
 * @returns {object} metadata of VMCostProperties
 *
 */
VMCostProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VMCostProperties',
    type: {
      name: 'Composite',
      className: 'VMCostProperties',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        resourceGroupName: {
          required: false,
          serializedName: 'resourceGroupName',
          type: {
            name: 'String'
          }
        },
        cost: {
          required: false,
          serializedName: 'cost',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = VMCostProperties;
