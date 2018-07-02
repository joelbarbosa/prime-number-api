import ExtendableError from 'es6-error';
import Log from 'config/winston';

class PrimeErrorHandle extends ExtendableError {

  constructor(message = 'Error occurred in application.') {
    super(message);
  }

  _genericErrorHandle() {
    return (err, req, res, next) => {
      res.status(err.status || 500);
      res.end(this._logConsole(this._getErrorMessageProtocol(this._logConsole(err))));
    }
  }

  _getErrorMessageProtocol(error) {
    const protocol = new Date().getTime();
    return `${error.message || ''} If this continues, to report support: ${protocol}`;
  }

  /**
   *
   * @return {object} the same object
   */
  _logConsole(object) {
    Log.error(object);
    return object;
  }

}

export default PrimeErrorHandle;
