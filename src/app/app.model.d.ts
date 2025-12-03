declare namespace AppModel {
    interface FormData {
        title: string;
        description: string;
    }
    interface FormDataWithSignal {
        title: WriteableSignal<FormData.title>;
        description: WriteableSignal<FormData.description>;
    }
    interface Element {
        formData: FormData;
    }
    interface ElementWithSignal {
        formData: FormDataWithSignal;
    }
    interface Segment {
        formData: FormData;
        elements: Element[];
    }
    interface SegmentWithSignal {
        formData: FormDataWithSignal;
        elements: ElementWithSignal[];
    }
}