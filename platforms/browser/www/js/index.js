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

        initApp();
        app.receivedEvent('deviceready');

    },receivedEvent: function(id)
    {

       
    }
};


var admobid = {};

    admobid = {  
        banner: 'ca-app-pub-6833525801886116~6338063942' 
    };
 



function initApp() {

    alert(1);
 

    if (AdMob) {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}
