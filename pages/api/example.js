// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Mobile from "./models/mobileModel";
import User from "./models/userModel";

export default async function handler(req, res) {
  const mobile = await Mobile.find();
  const users = await User.find();

  return res.status(200).json({
    mobile,
    users,
  });
}
