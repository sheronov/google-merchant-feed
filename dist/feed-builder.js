"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedBuilder = void 0;
const formatters_1 = require("./formatters");
const xml_properties_map_1 = require("./xml-properties-map");
const xmlbuilder2_xml_builder_1 = require("./xmlbuilder2-xml-builder");
class FeedBuilder {
    constructor(xmlBuilder = new xmlbuilder2_xml_builder_1.XMLBuilder2XMLBuilder()) {
        this.xmlBuilder = xmlBuilder;
        this.feed = {
            channel: {},
            products: [],
        };
        this.additionalFields = {};
    }
    withTitle(title) {
        this.feed.channel.title = title;
        return this;
    }
    withLink(link) {
        this.feed.channel.link = link;
        return this;
    }
    withDescription(description) {
        this.feed.channel.description = description;
        return this;
    }
    withProduct(product) {
        this.feed.products.push(product);
        return this;
    }
    addProductField(name, mapNode) {
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
            this.feed.channel.item = this.feed.products.map((product) => (0, formatters_1.xmlObjectFormatter)(product, productXmlPropertiesMap));
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
    xmlPropertiesMap() {
        return Object.assign(Object.assign({}, xml_properties_map_1.xmlPropertiesMap), this.additionalFields);
    }
}
exports.FeedBuilder = FeedBuilder;
//# sourceMappingURL=feed-builder.js.map