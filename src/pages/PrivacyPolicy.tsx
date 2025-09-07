import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getPrivacyPolicy, getAllPrivacyPolicies } from "@/data/privacyPolicyData";

const PrivacyPolicy = () => {
  const { appName } = useParams<{ appName: string }>();
  const navigate = useNavigate();

  // If no app name is provided, show general privacy policy
  if (!appName) {
    const allPolicies = getAllPrivacyPolicies();
    
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Privacy Policies
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Select an application to view its privacy policy
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                {allPolicies.map(({ slug, data }) => (
                  <Card key={slug} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-semibold">{data.appName}</h3>
                          <p className="text-muted-foreground">
                            Last updated: {data.lastUpdated}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => navigate(`/privacypolicy/${slug}`)}
                        >
                          View Policy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const policy = getPrivacyPolicy(appName);

  if (!policy) {
    return <Navigate to="/privacypolicy" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/privacypolicy")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Privacy Policies
        </Button>
        
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              {policy.appName} Privacy Policy
            </CardTitle>
            <p className="text-muted-foreground text-center">
              Last updated: {policy.lastUpdated}
            </p>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                {policy.content.introduction}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <ul className="space-y-2">
                {policy.content.dataCollection.map((item, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="space-y-2">
                {policy.content.dataUsage.map((item, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                {policy.content.dataSharing}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                {policy.content.dataSecurity}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <ul className="space-y-2">
                {policy.content.userRights.map((item, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </section>

            {policy.content.additionalSections?.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                {policy.content.contact}
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
