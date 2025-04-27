"use client"

import Link from "next/link"
import {
  Button,
  Avatar,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import AppleIcon from "@mui/icons-material/Apple"
import GoogleIcon from "@mui/icons-material/Google"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e7f8fe]">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="w-8 h-8 rounded-md bg-[#f5be30]"></div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#0195ff]">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#0195ff]">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#0195ff]">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#0195ff]">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-[#0195ff]">
            Sign In
          </Link>
          <Button
            variant="contained"
            className="bg-[#0195ff] hover:bg-[#0195ff]/90 text-white normal-case rounded-md px-4 py-1.5 text-sm font-medium shadow-none"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-black">Guaranteed</span>
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#0195ff]">Real Estate Solutions</span>
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-8">
          Find your dream property with our comprehensive real estate platform. We offer the best solutions for buyers,
          sellers, and agents.
        </p>
        <Button
          variant="contained"
          className="bg-[#f5be30] hover:bg-[#f5be30]/90 text-black normal-case rounded-md px-8 py-2 mb-12 text-sm font-medium shadow-none"
        >
          Get Started
        </Button>

        <div className="relative max-w-4xl mx-auto">
          <img
            src="hero.png"
            alt="Real Estate Dashboard"
            className="mx-auto w-full"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-lg shadow-sm overflow-visible">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="bg-[#0195ff] w-8 h-8 text-white text-sm">1</Avatar>
                <div>
                  <h3 className="font-semibold text-lg">For Developer</h3>
                  <p className="text-sm text-gray-500 mt-1">Access to all developer tools and APIs</p>
                </div>
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">$299</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="contained"
                  startIcon={<AppleIcon />}
                  className="bg-black hover:bg-black/90 text-white normal-case rounded-full px-6 py-1.5 text-sm font-medium shadow-none"
                >
                  App Store
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  className="border-black text-black normal-case rounded-full px-6 py-1.5 text-sm font-medium hover:bg-black/5"
                >
                  Google Play
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow-sm overflow-visible">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="bg-[#0195ff] w-8 h-8 text-white text-sm">2</Avatar>
                <div>
                  <h3 className="font-semibold text-lg">For Agents</h3>
                  <p className="text-sm text-gray-500 mt-1">Complete toolkit for real estate professionals</p>
                </div>
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">$199</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="contained"
                  startIcon={<AppleIcon />}
                  className="bg-black hover:bg-black/90 text-white normal-case rounded-full px-6 py-1.5 text-sm font-medium shadow-none"
                >
                  App Store
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  className="border-black text-black normal-case rounded-full px-6 py-1.5 text-sm font-medium hover:bg-black/5"
                >
                  Google Play
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Our Exclusive</h2>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0195ff] mb-4">Real Estate Feature</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our platform offers a comprehensive suite of tools designed specifically for real estate professionals and
            clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0195ff]/10 flex items-center justify-center text-[#0195ff]">
                <CheckCircleOutlineIcon className="w-4 h-4" />
              </div>
              <span className="text-sm">Property Management</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0195ff]/10 flex items-center justify-center text-[#0195ff]">
                <CheckCircleOutlineIcon className="w-4 h-4" />
              </div>
              <span className="text-sm">Client Communication</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0195ff]/10 flex items-center justify-center text-[#0195ff]">
                <CheckCircleOutlineIcon className="w-4 h-4" />
              </div>
              <span className="text-sm">Document Management</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0195ff]/10 flex items-center justify-center text-[#0195ff]">
                <CheckCircleOutlineIcon className="w-4 h-4" />
              </div>
              <span className="text-sm">Marketing Tools</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0195ff]/10 flex items-center justify-center text-[#0195ff]">
                <CheckCircleOutlineIcon className="w-4 h-4" />
              </div>
              <span className="text-sm">Advanced Analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0195ff]/10 flex items-center justify-center text-[#0195ff]">
                <CheckCircleOutlineIcon className="w-4 h-4" />
              </div>
              <span className="text-sm">Virtual Tours</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0195ff]/10 flex items-center justify-center text-[#0195ff]">
                <CheckCircleOutlineIcon className="w-4 h-4" />
              </div>
              <span className="text-sm">Lead Generation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0195ff]/10 flex items-center justify-center text-[#0195ff]">
                <CheckCircleOutlineIcon className="w-4 h-4" />
              </div>
              <span className="text-sm">Mobile App Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Discover The</h2>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Perfect <span className="text-[#0195ff]">Properties</span> With Ease
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Avatar className="bg-[#0195ff]/10 text-[#0195ff] w-6 h-6 text-xs mt-1">1</Avatar>
              <div>
                <h3 className="font-semibold">Ready to Move In</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Browse our collection of move-in ready properties that meet your requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="bg-[#0195ff]/10 text-[#0195ff] w-6 h-6 text-xs mt-1">2</Avatar>
              <div>
                <h3 className="font-semibold">Off Plan Properties</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Invest early in upcoming developments with our off-plan property options.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="bg-[#0195ff]/10 text-[#0195ff] w-6 h-6 text-xs mt-1">3</Avatar>
              <div>
                <h3 className="font-semibold">Secondary Market</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Explore pre-owned properties with established neighborhoods and amenities.
                </p>
              </div>
            </div>

            <Button
              variant="contained"
              className="bg-[#0195ff] hover:bg-[#0195ff]/90 text-white normal-case rounded-md px-6 py-1.5 text-sm font-medium shadow-none"
            >
              View All Properties
            </Button>
          </div>

          <div>
            <img
              src="img-2.png"
              alt="Modern Building"
              className=""
            />
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Marketing <span className="text-[#0195ff]">Problem</span> Solution
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our comprehensive marketing solutions help you overcome common challenges in real estate promotion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Avatar className="bg-[#0195ff]/10 text-[#0195ff] w-6 h-6 text-xs mt-1">1</Avatar>
              <div>
                <h3 className="font-semibold">Marketing Solution</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Our integrated marketing platform helps you create compelling property listings, reach targeted
                  audiences, and track performance metrics to optimize your campaigns.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Avatar className="bg-[#0195ff]/10 text-[#0195ff] w-6 h-6 text-xs mt-1">2</Avatar>
              <div>
                <h3 className="font-semibold">Marketing Tools</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Access professional-grade tools for creating virtual tours, high-quality photography, social media
                  campaigns, and email marketing to showcase properties effectively.
                </p>
              </div>
            </div>

            <Button
              variant="contained"
              className="bg-[#0195ff] hover:bg-[#0195ff]/90 text-white normal-case rounded-md px-6 py-1.5 text-sm font-medium shadow-none"
            >
              Learn More
            </Button>
          </div>

          <div>
            <img
              src="img-3.png"
              alt="Marketing Strategy"
              className=""
            />
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Our <span className="text-[#0195ff]">Certification</span> Course
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="img-4.png"
              alt="Certification Training"
              className=""
            />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Our comprehensive certification program is designed to equip real estate professionals with the knowledge
              and skills needed to excel in today's competitive market. The course covers property valuation,
              negotiation techniques, marketing strategies, and legal compliance.
            </p>
            <p className="text-sm text-gray-600">
              Upon completion, participants receive an industry-recognized certification that enhances their credibility
              and opens new career opportunities. The program includes both theoretical knowledge and practical
              applications through case studies and real-world scenarios.
            </p>
            <Button
              variant="contained"
              className="bg-[#0195ff] hover:bg-[#0195ff]/90 text-white normal-case rounded-md px-6 py-1.5 text-sm font-medium shadow-none"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Referral And <span className="text-[#0195ff]">Rewards</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-lg shadow-sm overflow-visible">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#0195ff]"></div>
                  <span className="text-sm">Refer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#f5be30]"></div>
                  <span className="text-sm">Earn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-sm">Redeem</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg shadow-sm overflow-visible">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Referral Point</h3>
              <div className="space-y-4">
                <div className="bg-[#edf3f7] p-3 rounded-md">
                  <p className="text-xs">Refer a friend and earn 500 points when they sign up</p>
                </div>
                <div className="bg-[#edf3f7] p-3 rounded-md">
                  <p className="text-xs">Earn 1000 points when your referral completes their first transaction</p>
                </div>
                <div className="bg-[#edf3f7] p-3 rounded-md">
                  <p className="text-xs">Redeem points for premium features, discounts, and exclusive benefits</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-lg shadow text-white">
            <h3 className="font-semibold mb-4">The game plan</h3>
            <p className="text-sm mb-4">Connect. Discover. Reward.</p>
            <div className="bg-white/20 p-4 rounded-md backdrop-blur-sm">
              <p className="text-sm font-medium">Referral Rewards</p>
              <p className="text-xs mt-2">
                Unlock exclusive benefits by referring friends and colleagues to our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            About <span className="text-[#0195ff]">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="about-us.png"
              alt="CEO"
              className=""
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium">CEO</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <h3 className="font-semibold text-xl">John Smith</h3>
            <p className="text-sm text-gray-600">
              With over 15 years of experience in real estate and technology, John has led our company to become a
              market leader in providing innovative solutions for property professionals and clients alike. His vision
              has shaped our platform to address the most pressing challenges in the industry.
            </p>
            <p className="text-sm text-gray-600">
              Under his leadership, we've expanded to serve clients in over 20 countries, with a focus on combining
              cutting-edge technology with deep industry expertise.
            </p>
            <Button
              variant="contained"
              className="bg-[#0195ff] hover:bg-[#0195ff]/90 text-white normal-case rounded-md px-6 py-1.5 text-sm font-medium shadow-none"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Frequently Asked <span className="text-[#0195ff]">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion className="shadow-none border-b rounded-none">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="text-gray-500" />} className="px-0">
              <Typography className="font-medium text-sm">
                What are the benefits of using our real estate platform?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="px-0">
              <Typography className="text-sm text-gray-600">
                Our platform offers comprehensive tools for property search, management, and marketing. You'll benefit
                from advanced analytics, virtual tours, and a network of qualified agents.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="shadow-none border-b rounded-none">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="text-gray-500" />} className="px-0">
              <Typography className="font-medium text-sm">What's the cost for using our services?</Typography>
            </AccordionSummary>
            <AccordionDetails className="px-0">
              <Typography className="text-sm text-gray-600">
                We offer flexible pricing plans starting at $199/month for agents and $299/month for developers. Custom
                enterprise solutions are also available.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="shadow-none border-b rounded-none">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="text-gray-500" />} className="px-0">
              <Typography className="font-medium text-sm">How do I create an account on your platform?</Typography>
            </AccordionSummary>
            <AccordionDetails className="px-0">
              <Typography className="text-sm text-gray-600">
                Simply click the "Get Started" button, fill in your details, and follow the verification process. You
                can be up and running in less than 5 minutes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="shadow-none border-b rounded-none">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="text-gray-500" />} className="px-0">
              <Typography className="font-medium text-sm">
                What type of properties can I find on your platform?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="px-0">
              <Typography className="text-sm text-gray-600">
                Our platform features a wide range of properties including residential homes, commercial spaces, luxury
                estates, and investment opportunities in various global markets.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="shadow-none border-b rounded-none">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="text-gray-500" />} className="px-0">
              <Typography className="font-medium text-sm">Can I use your tools on my mobile device?</Typography>
            </AccordionSummary>
            <AccordionDetails className="px-0">
              <Typography className="text-sm text-gray-600">
                Yes, our platform is fully responsive and we offer dedicated mobile apps for both iOS and Android
                devices, providing a seamless experience across all your devices.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0195ff] py-16 px-4">
        <div className="container mx-auto">
          <Card className="rounded-lg shadow-lg overflow-visible max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-0">
                  <img
                    src="contact.png"
                    alt="Contact Person"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-2">Contact Us Today To</h2>
                  <h2 className="text-2xl font-bold text-[#0195ff] mb-4">Get Started</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Our team is ready to help you find the perfect property or maximize your real estate investments.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span> +1 (555) 123-4567
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> info@realestate.com
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Address:</span> 123 Property Lane, Real Estate City
                    </p>
                  </div>
                  <Button
                    variant="contained"
                    className="bg-[#f5be30] hover:bg-[#f5be30]/90 text-black normal-case rounded-md px-6 py-1.5 text-sm font-medium shadow-none"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Property Listings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Agent Tools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  FB
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  TW
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  IG
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">© 2023 Real Estate Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
