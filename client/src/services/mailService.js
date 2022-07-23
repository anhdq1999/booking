import axiosClient from "../api/axiosClient";

export const mailService={
  sendMail
}

function sendMail(to){
  const url = '/mail/tobeHost';
  return axiosClient.post(url,to);
}