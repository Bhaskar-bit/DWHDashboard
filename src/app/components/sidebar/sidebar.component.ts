import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  
  {
    path: "/maps",
    title: "DWH Monitering",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" }
    //,
  
  // {
  //   path: "/notifications",
  //   title: "Status Report",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  // {
  //   path: "/tables",
  //   title: "Incident List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // }
  
];
export const ReportingROUTES: RouteInfo[] = [
  {
    path: "/notifications",
    title: "Status Report",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/tables",
    title: "Incident List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  }
  
];
export const OUTERROUTES: RouteInfo[] = [
  {
    path: " ",
    title: "Application Monitering",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  }
  //,
  
  // {
  //   path: " ",
  //   title: "DWH Reporting",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" }
];
export const ReportingOUTERROUTES: RouteInfo[] = [
   {
    path: " ",
    title: "DWH Reporting",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: ""
   }
];


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  ReportingmenuItems: any[];
  outermenuItems: any[];
  ReportingoutermenuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.outermenuItems = OUTERROUTES.filter(outermenuItem => outermenuItem);
    this.ReportingoutermenuItems = ReportingOUTERROUTES.filter(reportingOutermenuItem => reportingOutermenuItem);
    this.ReportingmenuItems = ReportingROUTES.filter(reportermenuItem => reportermenuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
