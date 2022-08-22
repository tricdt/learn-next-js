import connectDB from '../../../utils/connectDB'
import auth from '../../../middleware/auth'
import bcrypt from 'bcrypt'
import Users from '../../../models/userModel'
connectDB()
export default async (req, res) => {
   switch (req.method) {
      case 'PATCH':
         await resetPassword(req, res)
         break
   }
}

const resetPassword = async (req, res) => {
   try {
      const result = await auth(req, res)
      console.log({ result })
      const { password } = req.body
      const passwordHash = await bcrypt.hash(password, 12)
      await Users.findOneAndUpdate({ _id: result.id }, { password: passwordHash })
      res.json({ msg: 'Update Success!' })
   } catch (err) {
      return res.status(500).json({ err: err.message })
   }
}
