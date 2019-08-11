import { Router, Request, Response, NextFunction } from 'express';
import { createTransport } from 'nodemailer';
import * as mg from 'nodemailer-mailgun-transport';



const router: Router = Router();

/**
 * fileUploader
 */

router.post('/', (req: Request, res: Response, next: NextFunction) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contactEmail = req.body.email;

    const auth = {
        auth: {
            api_key: process.env.api_key,
            domain: process.env.domain
        }
    };

    const mailer = createTransport(mg(auth));

    const mailOptions = {
        from: firstName + ' ' + lastName + ' ' + contactEmail,
        to: process.env.myEmail,
        subject: req.body.subject,
        html: req.body.message
    };

    mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
            // console.log('maybe err', error.mailOptions, '================', error);
            return;
        } else {
            // console.log('Message %s sent: %s', info.messageId, info.response);
            // console.log('reeeee', req.statusCode, 'vmnxvncvmnv', res.statusCode);
            res
                .send(
                    '<div class="alert alert--success row">' +
                    '<h4 class="col-xs-offset-5 col-xs-4 col-sm-offset-5 col-sm-4 col-md-offset-5 col-md-4" >' +
                    'Message sent!</h4></div>'
                );
            mailer.close();
        }
    });
});

export { router as Contact};
