"use strict";
{
    const SDK = globalThis.SDK;

    const PLUGIN_CLASS = SDK.Plugins.EMI_INDO_WebCloudStorage;

    PLUGIN_CLASS.Type = class WebCloudStorageType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}