export interface PrivacyPolicyData {
  appName: string;
  lastUpdated: string;
  content: {
    introduction: string;
    dataCollection: string[];
    dataUsage: string[];
    dataSharing: string;
    dataSecurity: string;
    userRights: string[];
    contact: string;
    additionalSections?: {
      title: string;
      content: string;
    }[];
  };
}

export const privacyPolicies: Record<string, PrivacyPolicyData> = {
  blockit: {
    appName: "Blockit",
    lastUpdated: "September 7, 2025",
    content: {
      introduction: "Blockit is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our distraction-blocking application. We believe in transparency and want you to understand exactly how your data is handled.",
      dataCollection: [
        "App usage patterns and blocking statistics (stored locally on your device)",
        "Device information (Android version, device model for compatibility purposes)",
        "Accessibility service permissions (required for app blocking functionality)",
        "List of installed apps on your device (to provide blocking options)",
        "Website and app blocking preferences and settings",
        "Usage time and session duration for blocked apps"
      ],
      dataUsage: [
        "To provide core app and website blocking functionality",
        "To generate personalized usage statistics and productivity reports",
        "To improve app performance and user experience",
        "To maintain your blocking preferences and custom settings",
        "To send you productivity insights and recommendations",
        "To ensure the app works correctly with different Android versions"
      ],
      dataSharing: "Blockit does not share, sell, rent, or transmit your personal data to any third parties. All data collected by the app is processed and stored locally on your device. We do not collect or store any personal information on external servers or cloud services. Your privacy is our priority, and we have designed the app to function completely offline regarding your personal data.",
      dataSecurity: "Your data security is of utmost importance to us. All data is stored locally on your device using Android's secure storage mechanisms and encryption standards. We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. The app requires minimal permissions and only accesses data necessary for its functionality.",
      userRights: [
        "Access and review all your data through the app's settings and statistics sections",
        "Export your usage data and statistics in a readable format",
        "Delete all your data by clearing app data or uninstalling the application",
        "Control which apps and websites can be monitored and blocked",
        "Disable specific features that collect usage data at any time",
        "Modify or delete your blocking preferences and custom settings",
        "Opt out of usage analytics and productivity tracking features"
      ],
      contact: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at niteshr14321@gmail.com. We are committed to addressing your privacy concerns promptly and transparently.",
      additionalSections: [
        {
          title: "Accessibility Service Usage",
          content: "Blockit uses Android's Accessibility Service API to monitor and block access to distracting apps and websites. This service allows the app to detect when you try to open blocked applications and redirect you to a blocking screen. The accessibility service only monitors apps that you have explicitly chosen to block and does not collect or transmit any sensitive information from other apps."
        },
        {
          title: "Data Retention",
          content: "Usage statistics and blocking data are retained on your device until you choose to delete them or uninstall the app. You can clear specific data ranges or all historical data at any time through the app's settings. No data is retained on external servers as all processing happens locally on your device."
        },
        {
          title: "Changes to This Policy",
          content: "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be communicated through app updates, and the 'Last Updated' date will be revised accordingly. We encourage you to review this policy periodically to stay informed about how we protect your privacy."
        }
      ]
    }
  },
  // You can easily add more privacy policies here for other projects
  // arogyasathi: {
  //   appName: "ArogyaSathi",
  //   lastUpdated: "September 7, 2025",
  //   content: {
  //     // Add ArogyaSathi privacy policy content here
  //   }
  // }
};

export const getPrivacyPolicy = (appSlug: string): PrivacyPolicyData | null => {
  return privacyPolicies[appSlug.toLowerCase()] || null;
};

export const getAllPrivacyPolicies = (): Array<{ slug: string; data: PrivacyPolicyData }> => {
  return Object.entries(privacyPolicies).map(([slug, data]) => ({ slug, data }));
};
