import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';
import 'bootstrap';
 
@autoinject
export class App {
    public router: Router;
 
    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;
        
        config.title = 'Kohab';
        config.options.pushState = true;
        config.map([
            { 
                route: ['', 'home'], 
                name: 'home', 
                moduleId: 'views/home/sitemap', 
                title: 'Home', 
                nav: 0 
            },
            {
                route: 'suppliers',
                name: 'supplierList',
                moduleId: 'views/suppliers/supplier_list_page',
                title: 'Supplier List',
                nav: false
            },
            {
                route: 'supplier/:id',
                name: 'supplierInfo',
                moduleId: 'views/suppliers/supplier_detail_page',
                title: 'Supplier Info',
                nav: false
            },
            {
                route: 'supplier/dashboard',
                name: 'supplierDashboard',
                moduleId: 'views/suppliers/supplier_dashboard_page',
                title: 'Supplier Dashboard',
                nav: false
            },
            {
                route: 'supplier/post/:id',
                name: 'supplierArticle',
                moduleId: 'views/suppliers/supplier_article_page',
                title: 'Supplier Article',
                nav: false
            },
            {
                route: 'supplier/posts/new',
                name: 'supplierArticleNew',
                moduleId: 'views/suppliers/supplier_new_article_page',
                title: 'Create Supplier Article',
                nav: false
            },
            {
                
                route: 'buyers/',
                name: 'dashboard',
                moduleId: 'views/buyers/home/dashboard',
                title: 'Dashboard',
                nav: false

            },
            {

                route: 'supplier',
                name: 'supplierIndex',
                moduleId: 'views/suppliers/supplier_index',
                title: 'Supplier Landing Page',
                nav: false
                
            },
            {
                route: 'supplier/register',
                name: 'Register Supplier',
                moduleId: 'views/suppliers/supplier_register',
                title: 'Supplier Registration',
                nav: false
            },
            {

                route: 'developer',
                name: 'developerIndex',
                moduleId: 'views/developers/developer_index',
                title: 'Developer Landing Page',
                nav: false
                
            },
            {
                route: 'developer/register',
                name: 'Register Developer',
                moduleId: 'views/developers/developer_register',
                title: 'Developer Registration',
                nav: false
            },
            {
                route: 'developer/profile',
                name: 'Register Developer',
                moduleId: 'views/developers/developer_register',
                title: 'Developer Registration',
                nav: false
            },
            {
                route: 'developer/profile',
                name: 'Developer Profile',
                moduleId: 'views/developers/developer_profile',
                title: 'Developer Profile',
                nav: false
            },
            {
                route: 'buyers/register',
                name: 'register',
                moduleId: 'views/buyers/register/register',
                title: 'Register',
                nav: false
            },
            {
                route: 'buyers/register_social',
                name: 'register',
                moduleId: 'views/buyers/register/register_social',
                title: 'Register',
                nav: false
            },
            {
                route: 'buyers/verify',
                name: 'verify',
                moduleId: 'views/buyers/register/verify',
                title: 'Verify',
                nav: false
            },
            {
                route: 'buyers/success',
                name: 'success',
                moduleId: 'views/buyers/register/success',
                title: 'Success',
                nav: false
            },
            {
                route: 'buyers/profile/new',
                name: 'createprofile',
                moduleId: 'views/buyers/profile/new',
                title: 'Create Profile',
                nav: false
            },
            {
                route: 'buyers/intro',
                name: 'introscreen',
                moduleId: 'views/buyers/intro/intro',
                title: 'Intro',
                nav: false
            },
            {
                route: 'buyers/view_property',
                name: 'viewProperty',
                moduleId: 'views/buyers/view_property',
                title: 'Property View',
                nav: false
            },
            {
                route: 'buyers/profile',
                name: 'Profile',
                moduleId: 'views/buyers/profile/profile',
                title: 'Profile',
                nav: false
            },
            {
                route: 'buyers/contact',
                name: 'Contact',
                moduleId: 'views/buyers/contact/buyer-contact-page',
                title: 'Contact',
                nav: false
            },
            {
                route: 'buyers/profile/edit',
                name: 'Edit Profile',
                moduleId: 'views/buyers/profile/profile_edit',
                title: 'Edit Profile',
                nav: false
            },
            {
                route: 'buyers/property/maplist',
                name: 'PropertyList',
                moduleId: 'views/buyers/property/property_list_map',
                title: 'Property Listings',
                nav: false
            }
        ]);
        config.mapUnknownRoutes('views/home/sitemap');
    }
}