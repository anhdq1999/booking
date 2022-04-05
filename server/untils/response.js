class Response {
  contructor(res, status, message) {
    this.status = status;
    this.message = message;
  }

  sucessfully() {
    return res.status(200).json({ status, message });
  }

  badRequest() {
    return res.status(400).json({ status, message });
  }

  internalError() {
    return res.status(500).json({ status, message });
  }
}