import {HttpService} from '@nestjs/axios';


interface ISendNotificationGoogleChat {
  title: string;
  content: string;
  url: string;
}

export const sendNotificationGoogleChat = async (data: ISendNotificationGoogleChat) => {
  const httpService = new HttpService();

  const content = {
    cardsV2: [
      {
        cardId: 'unique-card-id',
        card: {
          header: {
            title: data.title,
            imageType: 'CIRCLE'
          },
          sections: [
            {
              collapsible: false,
              widgets: [
                {
                  textParagraph: {
                    text: data.content
                  }
                }
              ]
            }
          ]
        }
      }
    ]
  };

  await httpService.axiosRef.post(data.url, content);
};
