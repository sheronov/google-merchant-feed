import { xmlObjectFormatter } from "./formatters";
import { Feed } from "./models/feed";
import { Product } from "./models/product";
import { XMLBuilder } from "./protocols/xml-builder";
import { xmlPropertiesMap, XmlPropertiesMapNode } from "./xml-properties-map";
import { XMLBuilder2XMLBuilder } from "./xmlbuilder2-xml-builder";

export class FeedBuilder {
  private feed: Feed = {
    channel: {},
    products: [],
  };
  
  private additionalFields: Record<string, XmlPropertiesMapNode> = {};

  constructor(
    private readonly xmlBuilder: XMLBuilder = new XMLBuilder2XMLBuilder(),
  ) {}

  withTitle(title: string) {
    this.feed.channel.title = title;
    return this;
  }

  withLink(link: string) {
    this.feed.channel.link = link;
    return this;
  }

  withDescription(description: string) {
    this.feed.channel.description = description;
    return this;
  }

  withProduct(product: Product) {
    this.feed.products.push(product);
    return this;
  }
  
  addProductField(name: string, mapNode?: XmlPropertiesMapNode) {
    if (!mapNode || !mapNode.xmlName) {
      mapNode = Object.assign({}, mapNode, {
        xmlName: name.indexOf(":") > -1 ? name : `g:${name}`
      });
    }
    if (!this.additionalFields[name]) {
      this.additionalFields[name] = mapNode;
    }
    return this.feed;
  }

  getFeed() {
    return this.feed;
  }

  buildXml() {
    if (this.feed.products.length > 0) {
      const productXmlPropertiesMap = this.xmlPropertiesMap();
      this.feed.channel.item = this.feed.products.map((product) =>
        xmlObjectFormatter(product, productXmlPropertiesMap),
      );
    }

    const feed = {
      rss: {
        "@xmlns:g": "http://base.google.com/ns/1.0",
        "@version": "2.0",
        channel: this.feed.channel,
      },
    };

    return this.xmlBuilder.buildXML(feed);
  }
  
  private xmlPropertiesMap(): Record<string, XmlPropertiesMapNode> {
    return {
      ...xmlPropertiesMap,
      ...this.additionalFields,
    };
  }
}
