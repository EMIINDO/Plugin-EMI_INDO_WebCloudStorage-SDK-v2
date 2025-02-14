"use strict";
{


    globalThis.C3.Plugins.EMI_INDO_WebCloudStorage.Instance = class WebCloudStorageInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }

            this.url = "";

            this.errorMsg = "";

            if (typeof firebase == 'undefined') {
                return;
            }
          
            this.CallBack = globalThis.C3.Plugins.EMI_INDO_WebCloudStorage.Cnds;
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }

    };
}