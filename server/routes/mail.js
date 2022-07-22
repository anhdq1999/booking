const express = require('express');
const router = express.Router();

const EmailController =require('../mail/SendMail');

// router.get('/sendmail',EmailController.send("18130006@st.hcmuaf.edu.vn","Test","Test"))

router.post('/tobeHost',EmailController.sendMailTobeHost);

module.exports = router;
