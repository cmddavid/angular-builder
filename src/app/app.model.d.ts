declare namespace AppModel {
    interface FormData {
        title: string;
        description: string;
    }
    interface Element {
        formData: FormData;
    }
    interface ElementWithSignal {
        formData: WriteableSignal<FormData>;
    }
    interface Segment {
        formData: FormData;
        elements: Element[];
    }
    interface SegmentWithSignal {
        formData: WriteableSignal<FormData>;
        elements: ElementWithSignal[];
    }
}