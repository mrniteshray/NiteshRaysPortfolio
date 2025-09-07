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
    lastUpdated: "August 24, 2025",
    content: {
      introduction: "Welcome to Blockit! Your privacy is important to us. This policy explains how Blockit handles permissions and data to keep your experience safe, transparent, and focused.",
      dataCollection: [
        "Blockit does not collect, store, or share any personal information",
        "The app runs entirely offline and does not require login or account creation"
      ],
      dataUsage: [
        "All processing happens completely on your device",
        "No data is transmitted over the internet or to external servers",
        "Permissions are used only for core blocking functionality"
      ],
      dataSharing: "Blockit does not collect, store, or share any personal information. The app runs entirely offline and does not require login or account creation. No personal data is logged, collected, shared, or monetized.",
      dataSecurity: "Blockit functions completely on-device. It does not connect to any server, nor transmit data over the internet. All accessibility events are processed entirely on your device and are never collected, uploaded, sold, or shared with anyone.",
      userRights: [
        "You can revoke any permission at any time via system settings",
        "The app continues to function (with limited features) even without some permissions",
        "You can disable Accessibility permission in Android Settings under: Settings > Accessibility > Installed Services > Blockit > Disable"
      ],
      contact: "If you have any questions or suggestions about this Privacy Policy, feel free to contact us at niteshr070104@gmail.com",
      additionalSections: [
        {
          title: "🔐 What Information We Collect",
          content: "Blockit does not collect, store, or share any personal information. The app runs entirely offline and does not require login or account creation."
        },
        {
          title: "⚙️ Permissions We Use and Why",
          content: "To offer core features that help users stay focused, Blockit requests the following permissions:\n\n• Accessibility Service: Required to detect and block specific UI components like Shorts/Reels from apps (e.g., YouTube, Instagram). We use this only to help block distractions. No data is read, stored, or shared.\n\n• Usage Access: Required to identify which apps are running so they can be blocked if needed.\n\n• Battery Optimization Exemption: Required to allow Blockit to run uninterrupted in the background for real-time blocking.\n\n• Notification Permission: Used to display helpful reminders when blocking starts, ends, or focus mode is active.\n\n• Website Blocking (via in-app browser/WebView): Websites are blocked using local filters. We do not collect, store, or transmit any URLs or browsing data."
        },
        {
          title: "👁️‍🗨️ Accessibility Service Disclosure (Google Play Compliance)",
          content: "Blockit requests the Accessibility Service permission only for the following core features:\n\n• Detecting which apps and screens are currently active to block distracting content (such as Shorts, Reels, or other specified apps)\n• Automatically displaying a block overlay to help you stay focused\n\nWhat accessibility data Blockit receives:\n• Limited information about which app or UI screen is in use (the app package name, some non-personal accessibility events such as window/state changes)\n\nWhat Blockit does NOT access or collect:\nThe app does not read, log, store, or transmit:\n• Text contents displayed on your device\n• Personal information, messages, passwords, payment details\n• Input fields, audio, or touch input\n\nAll accessibility events are processed entirely on your device and are never collected, uploaded, sold, or shared with anyone.\n\nGranting Accessibility permission is completely optional, but some focus & blocking features will not work without it. You can continue to use other features without granting this permission.\n\nHow to revoke: At any time, you can disable Accessibility permission for Blockit in your device's Android Settings under: Settings > Accessibility > Installed Services > Blockit > Disable.\n\nBlockit strictly follows the Google Play User Data Policy for Accessibility and user privacy."
        },
        {
          title: "🔒 Data Handling & Security",
          content: "• Blockit functions completely on-device\n• It does not connect to any server, nor transmit data over the internet\n• No personal data is logged, collected, shared, or monetized"
        },
        {
          title: "🚫 No Third-Party Services",
          content: "Blockit does not use ads, analytics SDKs, or third-party tracking services."
        },
        {
          title: "🛡️ User Control",
          content: "You are always in control.\n\n• You can revoke any permission at any time via system settings\n• The app continues to function (with limited features) even without some permissions"
        },
        {
          title: "📝 Changes to This Policy",
          content: "We may occasionally update this Privacy Policy to reflect improvements. All changes will be posted within the app or on our official GitHub page."
        },
        {
          title: "🧠📵 Thank You",
          content: "Thank you for choosing Blockit to help reduce distractions and stay focused!"
        }
      ]
    }
  }
  // You can easily add more privacy policies here for other projects
  // arogyasathi: {
  //   appName: "ArogyaSathi",
  //   lastUpdated: "September 7, 2025",
  //   content: {
  //     // Add ArogyaSathi privacy policy content here
  //   }
  // }
};
  // You can easily add more privacy policies here for other projects
  // arogyasathi: {
  //   appName: "ArogyaSathi",
  //   lastUpdated: "September 7, 2025",
  //   content: {
  //     // Add ArogyaSathi privacy policy content here
  //   }
  // }

export const getPrivacyPolicy = (appSlug: string): PrivacyPolicyData | null => {
  return privacyPolicies[appSlug.toLowerCase()] || null;
};

export const getAllPrivacyPolicies = (): Array<{ slug: string; data: PrivacyPolicyData }> => {
  return Object.entries(privacyPolicies).map(([slug, data]) => ({ slug, data }));
};
