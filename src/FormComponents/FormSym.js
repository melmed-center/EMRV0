import React from 'react'
import {SympComp} from "../Components/RadioComp";

class FormSym extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <h2 style={{textAlign: 'center'}}>Symptom Checklist Parent (Vanderbilt Modified Form)</h2>
                    <p>Please rate each symptom by selecting the number that best describes the symptoms or severity of challenge.</p>
                    <h3>Frequency Code: 0 = Never, 1 = Occasionally, 2 = Often, 3 = Very Often</h3>

                    {/*Have alternating color themes similar to the form*/}
                    <SympComp
                        label = "Fails to give attention to details or makes careless mistakes"
                        name ="1"
                    />

                    <SympComp
                        label = "Has difficulty sustaining attention in tasks"
                        name ="2"
                    />
                    <SympComp
                        label = "Does not seem to listen when spoken to directly"
                        name ="3"
                    />
                    <SympComp
                        label = "Difficulty following instructions and fails to complete assigned tasks"
                        name ="4"
                    />
                    <SympComp
                        label = "Has difficulty organizing tasks"
                        name ="5"
                    />
                    <SympComp
                        label = "Avoids or dislikes tasks that require sustained mental effort"
                        name ="6"
                    />
                    <SympComp
                        label = "Loses things necessary for tasks"
                        name ="7"
                    />
                    <SympComp
                        label = "Is easily distracted by extraneous stimuli"
                        name ="8"
                    />
                    <SympComp
                        label = "Is forgetful in daily activities"
                        name ="9"
                    />
                    <SympComp
                        label = "Fidgets with hands or feet or squirms in seat"
                        name ="10"
                    />
                    <SympComp
                        label = "Difficulty remaining seated when expected"
                        name ="11"
                    />
                    <SympComp
                        label = "Runs about or climbs excessively at inappropriate times"
                        name ="12"
                    />
                    <SympComp
                        label = "Has difficulty playing quietly"
                        name ="13"
                    />
                    <SympComp
                        label = "Is 'on the go' or often acts as if 'driven by a motor'"
                        name ="14"
                    />
                    <SympComp
                        label = "Talks excessively"
                        name ="15"
                    />
                    <SympComp
                    label = "Blurts out answers before questions complete"
                    name ="16"
                    />
                    <SympComp
                        label = "Has difficulty awaiting turn"
                        name ="17"
                    />
                    <SympComp
                        label = "Interrupts or intrudes on others"
                        name ="18"
                    />
                    <SympComp
                        label = "Difficulty with homework completion"
                        name ="19"
                    />
                    <SympComp
                        label = "Problematic school performance"
                        name ="20"
                    />
                    <SympComp
                        label = "Difficulty in social situations with peers"
                        name ="21"
                    />
                    <SympComp
                        label = "Challenges in the morning routine"
                        name ="22"
                    />
                    <SympComp
                        label = "Difficulty with time management"
                        name ="23"
                    />
                    <SympComp
                        label = "Difficulty with siblings"
                        name ="24"
                    />
                    <SympComp
                        label = "Difficulty managing anger or disappointment"
                        name ="25"
                    />
                    <SympComp
                        label = "Oppositional with parents"
                        name ="26"
                    />
                    <SympComp
                        label = "Aggressive verbally"
                        name ="27"
                    />
                    <SympComp
                        label = "Aggressive physically"
                        name ="28"
                    />
                    <SympComp
                        label = "Mood changes quickly and drastically"
                        name ="29"
                    />
                    <SympComp
                        label = "Less social with friends, looks dull or flat"
                        name ="30"
                    />
                    <SympComp
                        label = "Is tired during the day"
                        name ="31"
                    />
                    <SympComp
                        label = "Is dull, flat, “loss of spirit” not him or herself"
                        name ="32"
                    />
                    <SympComp
                        label = "Is worried or anxious about things"
                        name ="33"
                    />
                    <SympComp
                        label = "Is sad, depressed, low mood, tearful"
                        name ="34"
                    />
                    <SympComp
                        label = "Is irritated easily by things or crabby feeling"
                        name ="35"
                    />
                    <SympComp
                        label = "Reacts emotionally i.e. yelling, slamming doors"
                        name ="36"
                    />
                    <SympComp
                        label = "Tics or movements, twitches, jerks or noises"
                        name ="37"
                    />
                    <SympComp
                        label = "Habits such as nail biting or skin picking"
                        name ="38"
                    />
                    <SympComp
                        label = "Decreased appetite"
                        name ="39"
                    />
                    <SympComp
                        label = "Difficulty falling asleep"
                        name ="40"
                    />



                </main>
            </div>
        );
    }
}



export default FormSym;