class EventListDTO {
    id: string;
    date: Date;
    title: string;
    descriptino: string;
    isCancelled: boolean;
}

class EventDetailDTO {
    id: string;
    date: Date;
    image: string;
    title: string;
    description: string;
    video: string;
    isCancelled: boolean;
}

export { EventListDTO, EventDetailDTO };
