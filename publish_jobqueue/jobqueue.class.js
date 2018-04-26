class Jobqueue {
    /**
     * constructor
     * @param {*} options
     */
    constructor(options) {
        console.log("inside publish class..");
        console.log(options)
        this.options = options || {};
    }

    /**
     * do direct charge
     * @param {*} data
     */
    publish() {
       
      console.log('publish files..');

      let response = '1212';

      return response;
   }

   cancel() {

      console.log('cancel publish files..');

      let response = '2323';

      return response;
   }
}

module.exports = function(options) {
    return new Jobqueue(options);
};

module.exports.Jobqueue = Jobqueue;