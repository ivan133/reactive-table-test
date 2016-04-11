ClassifierStructure = new Meteor.Collection('classifier_structure');
Classifier = new Meteor.Collection('classifier');

if (Meteor.isServer) {
    if (!Classifier.find().count()) {
        Classifier.insert({
            title: 'test1',
            struct_id: "1"
        });
        Classifier.insert({
            title: 'test2',
            struct_id: "2"
        });
    }
    if (!ClassifierStructure.find().count()) {
        ClassifierStructure.insert({
            _id: "1"
        });
        ClassifierStructure.insert({
            _id: '2'
        });
    }
}
