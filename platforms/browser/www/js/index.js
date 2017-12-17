/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    initialize: function()
    {
        this.bindEvents(); 
    },
 
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false); 
 
    },
    onDeviceReady: function() {



    if (AdMob) {
        AdMob.createBanner({
            adId : "ca-app-pub-6833525801886116~6338063942",
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }


    AdMob.getAdSettings(function(info){
      alert('adId: ' + info.adId + '\n' + 'adTrackingEnabled: ' + info.adTrackingEnabled);
    }, function(){
      alert('failed to get user ad settings');
    });



        app.receivedEvent('deviceready');

    },receivedEvent: function(id)
    {

       
    }
};

 

 