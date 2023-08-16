interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Common User'],
  customerRoles: [],
  tenantRoles: ['Content Moderator', 'Admin', 'Business Owner', 'Common User'],
  tenantName: 'Parent',
  applicationName: 'ParenTest',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
