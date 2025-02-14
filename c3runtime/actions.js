"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_WebCloudStorage.Acts = {
        async Uplaod(path)
        {

            if (typeof firebase == 'undefined')
            {
                return;
            }
            

            const self = this;

            var storage = await firebase.storage();

            var storageRef = await firebase.storage().ref();

            var input = document.createElement('input');

            input.type = 'file';

            input.onchange = e => {

                var file = e.target.files[0];

                // file.name
                // file.size 
                // file.type 


                storageRef.child(path += '/' + file.name).put(file)
                    .then((snapshot) => {

                    self._trigger(self.CallBack.OnUplaod);

                    snapshot.ref.getDownloadURL().then((url) => {
                        if (url !== "")
                        {
                            self.url = url;
                            self._trigger(self.CallBack.OnUrl);
                        }
                    });
                }).
                catch ((error) => {

                    self.errorMsg = error;
                    self._trigger(self.CallBack.OnError);

                });

            }


            input.click();


        }
    };
}