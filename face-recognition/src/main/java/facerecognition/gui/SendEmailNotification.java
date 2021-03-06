package facerecognition.gui;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import static facerecognition.gui.MainMenu.PROJECT_FOLDER;


public class SendEmailNotification {
 
	static Properties mailServerProperties;
	static Session getMailSession;
	static MimeMessage generateMailMessage;
       

 
	public static void generateAndSendEmail() throws AddressException, MessagingException {
           
             
            String timeStamp = new SimpleDateFormat("dd/MM/yyyy    HH:mm:ss").format(Calendar.getInstance().getTime());
		// Step1
		System.out.println("\n 1st ===> Setup Mail Server Properties..");
		mailServerProperties = System.getProperties();
		mailServerProperties.put("mail.smtp.port", "587");
		mailServerProperties.put("mail.smtp.auth", "true");
		mailServerProperties.put("mail.smtp.starttls.enable", "true");
		System.out.println("Mail Server Properties have been setup successfully..");
 
		// Step2
		System.out.println("\n\n 2nd ===> get Mail Session..");
		getMailSession = Session.getDefaultInstance(mailServerProperties, null);
		generateMailMessage = new MimeMessage(getMailSession);
		generateMailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress("lanhoter@hotmail.com"));
		//generateMailMessage.addRecipient(Message.RecipientType.CC, new InternetAddress("test2@crunchify.com"));
		generateMailMessage.setSubject("Warning, Un-authorized Person!");
		String emailBody = "This Email is automatically sent by Artificial Intelligence based Prison Management System. " 
                                    + "<br><hr>Event: There is a Person cannot be identified from the Face Recognition Database"
                                    + "<br>Subject: " +"<img src="+PROJECT_FOLDER+"Pre-IMG\\CropVideo.jpg\">"
                                    + "<br>Face Numbers: 1" 
                                    + "<br>Time: " + timeStamp
                                    + "<hr>"
                                    + "<br><br> Regards, "
                                    + "<br>Group 6"
                                    + "<br>Artificial Intelligence based Prison Management System";
		
                generateMailMessage.setContent(emailBody, "text/html");
                
		System.out.println("Mail Session has been created successfully..");
 
		// Step3
		System.out.println("\n\n 3rd ===> Get Session and Send mail");
		Transport transport = getMailSession.getTransport("smtp");
 
		// Enter your correct gmail UserID and Password
		// if you have 2FA enabled then provide App Specific Password
		transport.connect("smtp.gmail.com", "net.aionem@gmail.com", "aionem.net@gmail.com");
		transport.sendMessage(generateMailMessage, generateMailMessage.getAllRecipients());
		transport.close();
	}

}