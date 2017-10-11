import {bindable} from 'aurelia-framework';
import * as $ from 'jquery';
import 'bootstrap-fileinput';

export class SupplierNewArticlePage {
  @bindable value;

  constructor (parent) {
  }

  valueChanged(newValue, oldValue) {
    
  }

  attached () {
    $("#input-image-supplier-article").fileinput({
        uploadUrl: "/site/image-upload",
        allowedFileExtensions: ["jpg", "png", "gif"],
        maxImageWidth: 200,
        maxFileCount: 1,
        resizeImage: true
    }).on('filepreupload', function() {
        $('#kv-success-box').html('');
    }).on('fileuploaded', function(event, data) {
        $('#kv-success-box').append(data.response.link);
        $('#kv-success-modal').modal('show');
    });
  }
}

