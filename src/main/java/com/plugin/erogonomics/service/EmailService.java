package com.plugin.erogonomics.service;

import com.plugin.erogonomics.dto.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;

    @Value("${app.mail.to}")
    private String toEmail;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${app.mail.enabled:false}")
    private boolean mailEnabled;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(ContactRequest request) {
        // Log the contact form submission
        logger.info("=== NEW LEAD RECEIVED ===");
        logger.info("Name: {}", request.getName());
        logger.info("Email: {}", request.getEmail());
        logger.info("Mobile: {}", request.getMobile());
        logger.info("Subject: {}", request.getSubject());
        logger.info("Message: {}", request.getMessage());
        logger.info("=========================");

        if (!mailEnabled) {
            logger.info("Email sending is disabled. Lead logged successfully.");
            return;
        }

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(toEmail);
            message.setSubject("New Lead - BuildCraftTechs: " + request.getSubject());
            message.setText(buildEmailBody(request));
            mailSender.send(message);
            logger.info("Email sent successfully to {}", toEmail);
        } catch (Exception e) {
            logger.error("Failed to send email: {}", e.getMessage());
            throw e;
        }
    }

    private String buildEmailBody(ContactRequest request) {
        return String.format("""
            🚀 NEW LEAD from BuildCraftTechs Website
            
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            👤 Name: %s
            📧 Email: %s
            📱 Mobile: %s
            🎯 Service Interest: %s
            
            💬 Message:
            %s
            
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            This email was sent from the BuildCraftTechs contact form.
            """,
            request.getName(),
            request.getEmail(),
            request.getMobile(),
            request.getSubject(),
            request.getMessage()
        );
    }
}

