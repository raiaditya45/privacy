import React from "react";
import { Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    width: 550,
    textAlign: "center",
    marginLeft:"600px",
    marginTop:"30px",
    [theme.breakpoints.down('sm')]:{
        width: 330,
    textAlign: "center",
    marginLeft:"20px",
    marginTop:"20px"
    }
  },
  privacy: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop:"20px",
    [theme.breakpoints.down('sm')]:{
        marginTop:"20px",
        fontSize: "25px",
        fontWeight: "bold",
    }
  },
  div1: {
    fontSize: "18px",
    [theme.breakpoints.down('sm')]:{
        fontSize: "20px",
    }
  },
 
  contact:{
      color:"grey",
      marginTop:"10px",
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainDiv}>
        <Typography className={classes.privacy}>Privacy Policy </Typography>
        <Typography className={classes.div1}>
          This page is used to inform visitors regarding policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use this Service. ZipoApps Ltd. built this app and provides
          this Service. The Service is intended for use as is. If you choose to
          use this Service, then you agree to the collection and use of
          information in relation to this policy. The Personal Information that
          this app collects is used for providing and improving the Service.
          Your information will not be shared with anyone except as described in
          this Privacy Policy.
        </Typography>
        <Typography className={classes.privacy}>
          Information Collection and Use
        </Typography>
        <Typography className={classes.div1}>
          All information that is requested will be retained on your device and
          is not collected by us in any way. The app does use third party
          services that may collect information used to identify you. Google
          Play Services AdMob Firebase Analytics
        </Typography>
        <Typography className={classes.privacy}>Log Data </Typography>
        <Typography className={classes.div1}>
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through third
          party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing my Service, the time and date of your use of
          the Service, and other statistics.
        </Typography>
        <Typography className={classes.privacy}>Cookies</Typography>
        <Typography className={classes.div1}>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device’s internal
          memory. This Service does not use these “cookies” explicitly. However,
          the app may use third party code and libraries that use “cookies” to
          collect information and improve their services. You have the option to
          either accept or refuse these cookies and know when a cookie is being
          sent to your device. If you choose to refuse our cookies, you may not
          be able to use some portions of this Service.
        </Typography>
        <Typography className={classes.privacy}>Service Providers</Typography>
        <Typography className={classes.div1}>
          We may employ third-party companies and individuals due to the
          following reasons: To facilitate our Service; To provide the Service
          on our behalf; To perform Service-related services; To assist us in
          analyzing how our Service is used. We want to inform users of this
          Service that these third parties have access to your Personal
          Information. The reason is to perform the tasks assigned to them on
          our behalf. However, they are obligated not to disclose or use the
          information for any other purpose.
        </Typography>
        <Typography className={classes.privacy}>Security</Typography>
        <Typography className={classes.div1}>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </Typography>
        <Typography className={classes.privacy}>
          Links to Other Sites
        </Typography>
        <Typography className={classes.div1}>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </Typography>
        <Typography className={classes.privacy}>Children’s Privacy</Typography>
        <Typography className={classes.div1}>
          These Services do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13. In the case we discover that a child under 13 has provided
          us with personal information, we immediately delete this from our
          servers. If you are a parent or guardian and you are aware that your
          child has provided us with personal information, please contact us so
          that we will be able to do necessary actions.
        </Typography>
        <Typography className={classes.privacy}>
          Changes to This Privacy Policy
        </Typography>
        <Typography className={classes.div1}>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately after they are posted on
          this page.
        </Typography>
        <Typography className={classes.privacy}>Contact Us</Typography>
        If you have any questions or suggestions about my Privacy Policy, do not
        hesitate to contact us at whatsappzweb@gmail.com.
      <Typography className={classes.contact}>Copyrights ©2021 WhatsAppz Web</Typography>
      </div>
    </>
  );
};
export default Home;
