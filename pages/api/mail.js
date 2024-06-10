import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    // Extraction des données du corps de la requête
    const { person, phone, date, time, depart,arrive } = req.body;

    // Assurez-vous que toutes les variables d'environnement nécessaires sont présentes
    if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASSWORD) {
      console.error('Server environment variables are not set');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error',
      });
    }

    // Configuration de Nodemailer avec vos paramètres SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // Serveur SMTP
      port: 587, // Port standard TLS
      secure: false, // True pour 465, false pour d'autres ports
      auth: {
        user: process.env.MAIL_USER, // Votre adresse email
        pass: process.env.MAIL_PASSWORD, // Votre mot de passe
      },
    });

    // Configuration de l'e-mail à envoyer
    const mailOptions = {
      from: `"Your Name" <${process.env.MAIL_USER}>`, // Expéditeur
      to: process.env.MAIL_RECIPIENT, // Destinataire défini dans .env
      subject: 'New Reservation Request', // Sujet
      text: `You have a new reservation request.\n\nDetails:\nPerson: ${person}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nDepart: ${depart}\nArrive: ${arrive}`, // Corps du texte
      // html: '<b>Hello world?</b>' // Vous pouvez également envoyer du HTML
    };

    // Envoi de l'e-mail
    try {
      const result = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', result.messageId);
      // Réponse réussie
      return res.status(200).json({
         success: true,
         message: 'Réservation validée avec succès !'
       });
    } catch (error) {
      console.error('Failed to send email', error);
      // Réponse en cas d'échec
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    // Gestion des méthodes non autorisées
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
