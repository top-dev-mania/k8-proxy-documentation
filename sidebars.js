module.exports = {
	someSidebar: {
		"Dashboards":
			[
				{
					"Client Welcome": [					
						"dashboards/client-welcome/index",
					],							
				},
				{
					"Websites": [					
						"dashboards/websites/deployment-notes",
						"dashboards/websites/development",
						"dashboards/websites/flavours",
						"dashboards/websites/notassigned",
						"dashboards/websites/production",						
					],							
				}
			],
		"Flavors":
		[
			{
				"Flavor A": [
					"flavors/flavor-a/overview",					
					"flavors/flavor-a/technical-architecture",	
					"flavors/flavor-a/faq",	
					"flavors/flavor-a/manual-setup-aws",	
					"flavors/flavor-a/automated-setup",	
					"flavors/flavor-a/testing",					
					{
						"Release Notes" :
						[
							"flavors/flavor-a/release-notes/history",
							{
								"0.x":
								[
									"flavors/flavor-a/release-notes/0_x/0_1",
								]
							}							
						]
					}
				],							
			},
			{
				"Flavor E": [
					"flavors/flavor-e/manual-setup-aws",
				],						
			},
			{
				"Flavor OVA": [
					"flavors/flavor-ova/overview",					
					"flavors/flavor-ova/technical-architecture",	
					"flavors/flavor-ova/faq",	
					"flavors/flavor-ova/manual-setup-aws",	
					"flavors/flavor-ova/manual-setup-azure",	
					"flavors/flavor-ova/automated-setup",	
					"flavors/flavor-ova/testing",					
					{
						"Release Notes" :
						[
							"flavors/flavor-ova/release-notes/history",
							{
								"0.x":
								[
									"flavors/flavor-ova/release-notes/0_x/0_1",
								]
							}							
						]
					}
				],							
			}
		],
		"Websites":
		[
			{					
					
				"a10networks": [	
				"websites/a10networks/overview",				
				],								
				"atlassian": [	
				"websites/atlassian/overview",
				],
				"bsigroup": [	
				"websites/bsigroup/overview",			
				],
				"fortinet": [	
				"websites/fortinet/overview",
				],
				"github": [	
				"websites/github/overview",
				],
				"gov.uk": [	
				"websites/gov.uk/overview",
				],
				"gwengineering": [	
				"websites/gwengineering/overview",
				],
				"gwfiledrop": [	
				"websites/gwfiledrop/overview",
				],	
				"gwwebsite": [	
				"websites/gwwebsite/overview",
				],			
				"microsoft": [	
				"websites/microsoft/overview",
				],
				"miniio": [	
				"websites/miniio/overview",
				],
				"msrb": [	
				"websites/msrb/overview",
				],
				"owasp": [	
				"websites/owasp/overview",
				],
				"sharepoint": [	
					{
						"cloud":
						[
							"websites/sharepoint/cloud/overview",
							"websites/sharepoint/cloud/file-handler"
						],
						"self-hosted":
						[
							"websites/sharepoint/self-hosted/overview",
							"websites/sharepoint/self-hosted/manual-install",
							"websites/sharepoint/self-hosted/http-module",							
						],	
					}
				],	
				"ukzones": [	
				"websites/ukzones/overview",
				],	
			},							
		],			
		"KB":
			[									
				"kb/style-guide",
				"kb/website-checklist",					
			],
	},
};
