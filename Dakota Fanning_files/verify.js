$dvbs.pubSub.subscribe('BeforeDecisionRender', '23ed9e7502e542188f453a441425f899', 'ModifyAdTagWithBsImpId', function(){var impId = '23ed9e7502e542188f453a441425f899';if($dvbs && $dvbs.tags[impId] && typeof($dvbs.tags[impId].tagAdtag) == 'string') {$dvbs.tags[impId].tagAdtag = $dvbs.tags[impId].tagAdtag.replace(/(?:\[url_encoded_publisher_data\]|%5Burl_encoded_publisher_data%5D|url_encoded_publisher_data|\[DV_IMP_ID\]|%5BDV_IMP_ID%5D|DV_IMP_ID)/g,encodeURIComponent('did23ed9e7502e542188f453a441425f899did'));}});


try{__tagObject_callback_595711459353({ImpressionID:"23ed9e7502e542188f453a441425f899", ServerPublicDns:"rtbc-ue1.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "23ed9e7502e542188f453a441425f899");}catch(e){}
try{__verify_callback_595711459353({
ResultID:2,
Passback:"",
AdWidth:320,
AdHeight:50});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "23ed9e7502e542188f453a441425f899");}catch(e){}
