Genoverse.Track.Model.File.BIGWIG = Genoverse.Track.Model.Graph.Bar.extend({

  getData : function(chr, start, end){
    var model = this;
    var deferred = $.Deferred();

    if(!this.url) this.data = new dallianceLib.BlobFetchable(this.track.dataFile);
    else this.data = new dallianceLib.URLFetchable(this.url);

    new BWReader(this.data, this.name, function(bw){
      console.log(bw);

      bw.getValues(chr, start, end, function(features, error){
        if(features == null ) console.log(error);
        console.log(features);
        model.receiveData(features, chr, start, end);
        deferred.resolveWith(model);
			});
		});

    return deferred;
  }
})
