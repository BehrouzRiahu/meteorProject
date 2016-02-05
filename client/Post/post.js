Apps = new Mongo.Collection("apps");
Apps.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  fileId: {
    type: String,
    label: "App Preview Image"
  },
  description: {
  	type: String,
  	label: "App Description"
  },
  price: {
  	type: Number,
  	label: "App price (USD)"
  },
  screenshots: {
  	type: String,
  	label: "App Screenshots"
  }
}));

Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});

ScreenShots = new FS.Collection("ss", {
  stores: [new FS.Store.GridFS("filesStore")]
});

ScreenShots.allow({
  download: function () {
    return true;
  },
  fetch: null
});