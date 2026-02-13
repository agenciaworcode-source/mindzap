/** 
 * @TercioSantos-0 |
 * serviço/todas as configurações de 1 empresa |
 * @param:companyId
 */
import CompaniesSettings from "../../models/CompaniesSettings";

interface Request {
  companyId: number;
};

const FindCompanySettingsService = async ({
  companyId
}:Request): Promise<CompaniesSettings> => {
  const companySettings = await CompaniesSettings.findOne({
    where: {companyId}
  });

  if (companySettings) {
      return companySettings;
  }

  const newSettings = await CompaniesSettings.create({
      companyId: companyId,
      hoursCloseTicketsAuto: "9999999999",
      chatBotType: "text",
      acceptCallWhatsapp: "enabled",
      userRandom: "enabled",
      sendGreetingMessageOneQueues: "enabled",
      sendSignMessage: "enabled",
      sendFarewellWaitingTicket: "disabled",
      userRating: "disabled",
      sendGreetingAccepted: "enabled",
      CheckMsgIsGroup: "enabled",
      sendQueuePosition: "disabled",
      scheduleType: "disabled",
      acceptAudioMessageContact: "enabled",
      sendMsgTransfTicket:"disabled",
      enableLGPD: "disabled",
      requiredTag: "disabled",
      lgpdDeleteMessage: "disabled",
      lgpdHideNumber: "disabled",
      lgpdConsent: "disabled",
      lgpdLink:"",
      lgpdMessage:"",
      createdAt: new Date(),
      updatedAt: new Date(),
      closeTicketOnTransfer: false,
      DirectTicketsToWallets: false
    });

  return newSettings;
};

export default FindCompanySettingsService;