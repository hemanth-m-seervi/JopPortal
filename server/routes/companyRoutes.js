import express from 'express'
import { registerCompany , loginCompany , getCompanyData, postJob, getCompanyJobApplicants, getCompanyPostedJobs, ChangeJobApplicationsStatus, changeVisibility} from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'


const router = express.Router()

router.post('/register',upload.single('image'),registerCompany)

router.post('/login',loginCompany)

router.get('/company',protectCompany,getCompanyData)

router.post('/post-job',protectCompany,postJob)

router.get('/applicants',protectCompany,getCompanyJobApplicants)

router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

router.post('/change-status',protectCompany,ChangeJobApplicationsStatus)

router.post('/change-visiblity',protectCompany,changeVisibility)


export default router