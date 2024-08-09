import { Feed } from "./models/feed";
import { Product } from "./models/product";
import { XMLBuilder } from "./protocols/xml-builder";
import { XmlPropertiesMapNode } from "./xml-properties-map";
export declare class FeedBuilder {
    private readonly xmlBuilder;
    private feed;
    private additionalFields;
    constructor(xmlBuilder?: XMLBuilder);
    withTitle(title: string): this;
    withLink(link: string): this;
    withDescription(description: string): this;
    withProduct(product: Product): this;
    addProductField(name: string, mapNode?: XmlPropertiesMapNode): Feed;
    getFeed(): Feed;
    buildXml(): string;
    private xmlPropertiesMap;
}
