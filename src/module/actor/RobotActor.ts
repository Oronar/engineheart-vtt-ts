export class RobotActor extends Actor {
    prepareData() {
        super.prepareData();

        const actorData = this.data;

        if (actorData.type === 'robot') return this._prepareRobotData(actorData);
    }

    _prepareRobotData(actorData: ActorData)
    {
        const intelligence = actorData.data.attributes.intelligence;
        const chassis = actorData.data.attributes.chassis;
        const crux = actorData.data.attributes.crux;

        const physicalInteraction = actorData.data.derivedAttributes.physicalInteraction;
        const movement = actorData.data.derivedAttributes.movement;
        const thresholds = actorData.data.derivedAttributes.thresholds

        physicalInteraction.interactionPool = chassis.dexterity + chassis.reflexes;
        physicalInteraction.targetNumberToBeStruck = chassis.mobility + chassis.reflexes;
        physicalInteraction.damageFromStrike = Math.floor(chassis.strength/2);

        movement.initiative = chassis.reflexes;
        movement.speed = chassis.mobility + chassis.reflexes;

        thresholds.osThreshold.max = intelligence.digicon + crux.buffer;
        thresholds.damageThreshold.max = crux.durability + crux.size;
        
        return actorData;
    }
}