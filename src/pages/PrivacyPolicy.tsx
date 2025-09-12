import { useParams, Navigate } from "react-router-dom";import { useParams, Navigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";import { ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";import { useNavigate } from "react-router-dom";

import { getPrivacyPolicy, getAllPrivacyPolicies } from "@/data/privacyPolicyData";import { getPrivacyPolicy, getAllPrivacyPolicies } from "@/data/privacyPolicyData";



// Helper function to format content with line breaks// Helper function to format content with line breaks

const formatContent = (content: string) => {const formatContent = (content: string) => {

  if (!content) return null;  if (!content) return null;

  return content.split('\n').map((line, index) => (  return content.split('\n').map((line, index) => (

    <span key={index}>    <span key={index}>

      {line}      {line}

      {index < content.split('\n').length - 1 && <br />}      {index < content.split('\n').length - 1 && <br />}

    </span>    </span>

  ));  ));

};};



const PrivacyPolicy = () => {const PrivacyPolicy = () => {

  const { appName } = useParams<{ appName: string }>();  const { appName } = useParams<{ appName: string }>();

  const navigate = useNavigate();  const navigate = useNavigate();

      

  // If no app name is provided, show general privacy policy      return (

  if (!appName) {        <div className="min-h-screen bg-background">

    const allPolicies = getAllPrivacyPolicies();        <div className="container mx-auto px-4 py-8">

              <Button

    return (            variant="ghost"

      <div className="min-h-screen bg-background">            onClick={() => navigate(-1)}

        <div className="container mx-auto px-4 py-8">            className="mb-6"

          <Button          >

            variant="ghost"            <ArrowLeft className="w-4 h-4 mr-2" />

            onClick={() => navigate(-1)}            Back

            className="mb-6"          </Button>

          >          

            <ArrowLeft className="w-4 h-4 mr-2" />          <Card className="max-w-4xl mx-auto">

            Back            <CardHeader>

          </Button>              <CardTitle className="text-3xl font-bold text-center">

                          Privacy Policies

          <Card className="max-w-4xl mx-auto">              </CardTitle>

            <CardHeader>              <p className="text-muted-foreground text-center">

              <CardTitle className="text-3xl font-bold text-center">                Select an application to view its privacy policy

                Privacy Policies              </p>

              </CardTitle>            </CardHeader>

              <p className="text-muted-foreground text-center">            <CardContent className="space-y-4">

                Select an application to view its privacy policy              <div className="grid gap-4">

              </p>                {allPolicies.map(({ slug, data }) => (

            </CardHeader>                  <Card key={slug} className="cursor-pointer hover:shadow-md transition-shadow">

            <CardContent className="space-y-4">                    <CardContent className="p-6">

              <div className="grid gap-4">                      <div className="flex justify-between items-center">

                {allPolicies.map(({ slug, data }) => (                        <div>

                  <Card key={slug} className="cursor-pointer hover:shadow-md transition-shadow">                          <h3 className="text-xl font-semibold">{data.appName}</h3>

                    <CardContent className="p-6">                          <p className="text-muted-foreground">

                      <div className="flex justify-between items-center">                            Last updated: {data.lastUpdated}

                        <div>                          </p>

                          <h3 className="text-xl font-semibold">{data.appName}</h3>                        </div>

                          <p className="text-muted-foreground">                        <Button

                            Last updated: {data.lastUpdated}                          variant="outline"

                          </p>                          onClick={() => navigate(`/privacypolicy/${slug}`)}

                        </div>                        >

                        <Button                          View Policy

                          variant="outline"                        </Button>

                          onClick={() => navigate(`/privacypolicy/${slug}`)}                      </div>

                        >                    </CardContent>

                          View Policy                  </Card>

                        </Button>                ))}

                      </div>              </div>

                    </CardContent>            </CardContent>

                  </Card>          </Card>

                ))}        </div>

              </div>      </div>

            </CardContent>    );

          </Card>  }

        </div>

      </div>  const policy = getPrivacyPolicy(appName);

    );

  }  if (!policy) {

    return <Navigate to="/privacypolicy" replace />;

  const policy = getPrivacyPolicy(appName);  }



  if (!policy) {  return (

    return <Navigate to="/privacypolicy" replace />;    <div className="min-h-screen bg-background">

  }      <div className="container mx-auto px-4 py-8">

        <Button

  return (          variant="ghost"

    <div className="min-h-screen bg-background">          onClick={() => navigate("/privacypolicy")}

      <div className="container mx-auto px-4 py-8">          className="mb-6"

        <Button        >

          variant="ghost"          <ArrowLeft className="w-4 h-4 mr-2" />

          onClick={() => navigate("/privacypolicy")}          Back to Privacy Policies

          className="mb-6"        </Button>

        >        

          <ArrowLeft className="w-4 h-4 mr-2" />        <Card className="max-w-4xl mx-auto">

          Back to Privacy Policies          <CardHeader>

        </Button>            <CardTitle className="text-3xl font-bold text-center">

                      {policy.appName} Privacy Policy

        <Card className="max-w-4xl mx-auto">            </CardTitle>

          <CardHeader>            <p className="text-muted-foreground text-center">

            <CardTitle className="text-3xl font-bold text-center">              Last updated: {policy.lastUpdated}

              {policy.appName} Privacy Policy            </p>

            </CardTitle>          </CardHeader>

            <p className="text-muted-foreground text-center">          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">

              Last updated: {policy.lastUpdated}            <section className="mb-8">

            </p>              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>

          </CardHeader>              <div className="text-muted-foreground leading-relaxed">

          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">                {formatContent(policy.content.introduction)}

            <section className="mb-8">              </div>

              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>            </section>

              <div className="text-muted-foreground leading-relaxed">

                {formatContent(policy.content.introduction)}            <section className="mb-8">

              </div>              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

            </section>              <ul className="space-y-2">

                {policy.content.dataCollection.map((item, index) => (

            <section className="mb-8">                  <li key={index} className="text-muted-foreground leading-relaxed">

              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>                    • {item}

              <ul className="space-y-2">                  </li>

                {policy.content.dataCollection.map((item, index) => (                ))}

                  <li key={index} className="text-muted-foreground leading-relaxed">              </ul>

                    • {item}            </section>

                  </li>

                ))}            <section className="mb-8">

              </ul>              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>

            </section>              <ul className="space-y-2">

                {policy.content.dataUsage.map((item, index) => (

            <section className="mb-8">                  <li key={index} className="text-muted-foreground leading-relaxed">

              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>                    • {item}

              <ul className="space-y-2">                  </li>

                {policy.content.dataUsage.map((item, index) => (                ))}

                  <li key={index} className="text-muted-foreground leading-relaxed">              </ul>

                    • {item}            </section>

                  </li>

                ))}            <section className="mb-8">

              </ul>              <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>

            </section>              <div className="text-muted-foreground leading-relaxed">

                {formatContent(policy.content.dataSharing)}

            <section className="mb-8">              </div>

              <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>            </section>

              <div className="text-muted-foreground leading-relaxed">

                {formatContent(policy.content.dataSharing)}            <section className="mb-8">

              </div>              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>

            </section>              <div className="text-muted-foreground leading-relaxed">

                {formatContent(policy.content.dataSecurity)}

            <section className="mb-8">              </div>

              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>            </section>

              <div className="text-muted-foreground leading-relaxed">

                {formatContent(policy.content.dataSecurity)}            <section className="mb-8">

              </div>              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>

            </section>              <ul className="space-y-2">

                {policy.content.userRights.map((item, index) => (

            <section className="mb-8">                  <li key={index} className="text-muted-foreground leading-relaxed">

              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>                    • {item}

              <ul className="space-y-2">                  </li>

                {policy.content.userRights.map((item, index) => (                ))}

                  <li key={index} className="text-muted-foreground leading-relaxed">              </ul>

                    • {item}            </section>

                  </li>

                ))}            {policy.content.additionalSections?.map((section, index) => (

              </ul>              <section key={index} className="mb-8">

            </section>                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

                <div className="text-muted-foreground leading-relaxed">

            {policy.content.additionalSections?.map((section, index) => (                  {formatContent(section.content)}

              <section key={index} className="mb-8">                </div>

                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>              </section>

                <div className="text-muted-foreground leading-relaxed">            ))}

                  {formatContent(section.content)}

                </div>            <section className="mb-8">

              </section>              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

            ))}              <div className="text-muted-foreground leading-relaxed">

                {formatContent(policy.content.contact)}

            <section className="mb-8">              </div>

              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>            </section>

              <div className="text-muted-foreground leading-relaxed">          </CardContent>

                {formatContent(policy.content.contact)}        </Card>

              </div>      </div>

            </section>    </div>

          </CardContent>  );

        </Card>  } catch (error) {

      </div>    console.error('Error in PrivacyPolicy component:', error);

    </div>    return (

  );      <div className="min-h-screen bg-background flex items-center justify-center">

};        <Card className="max-w-md mx-auto">

          <CardHeader>

export default PrivacyPolicy;            <CardTitle className="text-2xl font-bold text-center text-red-600">
              Error Loading Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Sorry, there was an error loading the privacy policy page.
            </p>
            <Button onClick={() => navigate('/')}>
              Go Back Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default PrivacyPolicy;
