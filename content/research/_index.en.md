---
title: "Research"
---

Precision medicine integrates individual genetic information with real-time monitoring data to provide personalized diagnosis and treatment, improving efficacy while reducing side-effect risks. This paradigm has broad applications in metabolic disorders, cancer, immune diseases, and beyond. With rapid advances in interdisciplinary biotechnology, developing smarter and more personalized cell-therapy approaches has become a major focus in precision medicine.

## Lab Overview

Our laboratory for Intelligent Cell Engineering and Precision Medicine is dedicated to integrating cutting-edge methods from synthetic biology, biomedical engineering, artificial intelligence, materials science, and electronic engineering. We design and build novel artificial signaling pathways and intelligent control systems for precise programming, accelerated evolution, and functional remodeling of cells. Our ultimate goal is to endow cells with capabilities for sensing, decision-making, and execution, thereby reshaping prevention, diagnosis, and treatment of major diseases including cancer, immune disorders, genetic diseases, and metabolic diseases, and advancing next-generation cell therapies and intelligent biosystems.

We believe that breakthrough innovation emerges from interdisciplinary collisions of ideas. If your background is in engineering, computer science, physics, chemistry, materials science, electronics, or related areas, and you hope to apply your expertise to life-science frontiers, you are warmly welcome to join us—even if your current biology background is limited. Our lab culture emphasizes freedom, creativity, collaboration, and mutual support, and values both independent thinking and team contribution.

Although we already have multiple projects that can be advanced rapidly, I especially hope that our future core directions will be defined together by you and me. Current priorities include, but are not limited to:

### 1. Development of New Biotools

Develop next-generation electrogenetic tools and highly safe small-molecule receptors, and advance AI-assisted protein design and gene-circuit reconstruction to build foundational platforms for intelligent cell engineering.

### 2. Construction of Intelligent Diagnosis-and-Treatment Systems

Explore applications of electrogenetics in wearable devices and electroceuticals, develop bridging interfaces between gene regulation and electronic devices, establish new approaches for artificial intervention of system homeostasis, and promote clinical translation of next-generation cell and gene therapy tools.

### 3. New Directions Brought by You

We welcome explorers with interdisciplinary vision and strong collaborative spirit to build an innovation lab that defines the future of synthetic biology together.

## Selected Existing Work

### I. Establishment of Electrogenetic Gene Regulation Systems

Modern medicine is undergoing a deep integration between electronic intelligence and biological regulation. However, intrinsic differences between electronic systems (discrete/digital) and biological systems (continuous/dynamic) have long limited interoperability. This gap makes it difficult to directly transform health data collected by wearable devices into precise medical interventions. By constructing a novel electrogenetic interface, we achieved precise control of mammalian gene expression by direct current and provided a breakthrough solution to electronic-biological compatibility.

To overcome the lack of reliable electrogenetic tools and insufficient control precision, our team developed DC-actuated regulation technology (DART). By inserting electrodes into biological solution and applying low-voltage DC (DC 5V), DART induces controllable reactive oxygen species (ROS) without exogenous mediators. By optimizing electrode spacing (0.6 mm), stimulation duration (10-25 s), and related parameters, ROS concentration can be precisely maintained in a non-toxic range. Based on the mammalian KEAP1-NRF2-ARE signaling pathway, we engineered a ROS-responsive expression module in which NRF2 activated by electrical stimulation induces target-gene expression through ARE promoters. The module shows strong reversibility and adaptability across multiple cell types in HEK-293T and beyond.

To validate therapeutic potential, we stably integrated this electrical control system into human mesenchymal stem cells (hMSCs) and drove insulin expression for diabetes treatment. Notably, the system is robust across power supplies, from 3V button batteries to 5V power banks. In vivo, we used microencapsulation for long-term survival of therapeutic cells: sodium alginate capsules (~500 um) protected cells from host immunity while allowing diffusion of small molecules such as glucose. After subcutaneous implantation in type 1 diabetic mice, we innovatively used acupuncture needles as subcutaneous electrodes. Daily stimulation at 4.5V for 10-25 s maintained glucose homeostasis, with no significant difference from healthy controls (p>0.05). Long-term monitoring showed recovery of key metabolic indicators, including insulin, ketone bodies, and triglycerides, with no observed local tissue injury or systemic toxicity.

![Figure 1. Construction of a low-voltage DC electrogenetic control system](/images/research/research-fig1-en-v3.png)

**Key innovations of this work:**
1. A direct DC-to-gene-expression coupling mechanism without mediator dependence;
2. A wearable-compatible electrically controlled system with clinical translation potential;
3. Electrical insulin control that restores blood glucose in diabetic mice via minimally invasive acupuncture-electrode intervention.

These advances establish key foundations for closed-loop treatment of chronic diseases such as diabetes and open a path toward direct metabolic programming through wearable electronics in precision medicine.

This work received broad attention from journals and media including Nature, Nature Reviews Bioengineering, and many international science outlets.

**Article:** [https://www.nature.com/articles/s42255-023-00850-7](https://www.nature.com/articles/s42255-023-00850-7)

**Related coverage:**
- Nature: [https://www.nature.com/articles/d41586-023-02461-4](https://www.nature.com/articles/d41586-023-02461-4)
- Nature Reviews Bioengineering: [https://www.nature.com/articles/s44222-023-00113-w](https://www.nature.com/articles/s44222-023-00113-w)
- BioArt: [https://mp.weixin.qq.com/s/oiMFT_zLdJuM91cQb2SbQg](https://mp.weixin.qq.com/s/oiMFT_zLdJuM91cQb2SbQg)
- MIT Technology Review: [https://www.technologyreview.com/2024/05/30/1092937/the-messy-quest-to-replace-drugs-with-electricity/](https://www.technologyreview.com/2024/05/30/1092937/the-messy-quest-to-replace-drugs-with-electricity/)
- Medical Xpress: [https://medicalxpress.com/news/2023-08-implanted-cells-triggered-electricity-vivo.html](https://medicalxpress.com/news/2023-08-implanted-cells-triggered-electricity-vivo.html)
- ElectroPages: [https://www.electropages.com/blog/2023/08/wearable-interface-delivering-gene-therapies](https://www.electropages.com/blog/2023/08/wearable-interface-delivering-gene-therapies)

### II. A Mediator-Free, Non-invasive Ultrasound-Gene Coupling Platform Based on KEAP1-NRF2-ARE for Precision Diabetes Therapy

Ultrasound is a non-invasive, deep-penetrating, and tunable physical signal with major potential for gene regulation. Existing sonogenetic technologies are limited by dependence on nanomaterial mediators (e.g., sonosensitizer-driven ROS generation) or mechanical/thermal triggering, which carry biosafety and tissue-damage concerns. Building on our engineered KEAP1-NRF2-ARE pathway (Huang et al., Nature Metabolism 2023), we developed a mediator-free ultrasound-gene direct coupling technology. By optimizing ultrasound parameters (1.5 W/cm2, 45 kHz, 40 s), we established a precise and controllable intracellular ROS sensing system that enables material-free gene-switch control.

Core advantages include:
1. **Precise spatiotemporal control**: 10-40 s single stimulations induce expression, and levels return to baseline within 24 h after stimulation is removed.
2. **Cross-platform compatibility**: validated in six cell types including HEK-293T and hMSC.
3. **Deep-tissue penetration**: precise control of transgene expression in injected cells located in deep subcutaneous tissue.

In diabetic mouse models, subcutaneous ultrasound stimulation of implanted engineered cells yielded insulin secretion (0.6±0.1 ug/L) sufficient to stabilize blood glucose in the normal range. Glucose tolerance tests showed stimulated mice reduced blood glucose to healthy-control-comparable levels within 90 min.

![Figure 2. Ultrasound-controlled non-invasive gene expression system](/images/research/research-fig2-en-v2.png)

**Innovations of this platform include:**
1. Removing nanomaterial dependence and associated biocompatibility risks;
2. Enabling subcellular-scale precision control;
3. Achieving non-invasive wireless gene expression control.

**Article:** [https://academic.oup.com/nar/article/53/6/gkaf191/8089751](https://academic.oup.com/nar/article/53/6/gkaf191/8089751)

### III. A ROS-based Multi-Chemical Response Platform

Conventional gene-regulation systems are constrained by ligand specificity of natural receptor proteins and are difficult to adapt to structurally diverse small molecules (e.g., drug precursors, food additives, natural compounds, molecular probes). This project aims to develop a universal chemical-responsive system independent of natural receptors, overcoming compatibility bottlenecks of current tools.

In our previous electrogenetic (Nature Metabolism 2023) and sonogenetic (NAR 2025) studies, we established an engineered KEAP1-NRF2-ARE pathway responsive to ROS. We further found that many small-molecule drugs efficiently induce intracellular ROS. To increase sensitivity, we screened enhanced promoters carrying 1-8 repeated ARE elements; the 8ARE design enabled highly sensitive detection of subtoxic ROS levels. The platform demonstrates strong versatility, reversibility, and broad compatibility across eight cell lines, and supports inducible expression by eight structurally and functionally distinct small molecules, including FDA-approved drugs, food preservatives, and natural products.

In diabetic mice, injection of any tested molecule activated engineered-cell insulin secretion and restored glucose homeostasis. As a built-in safety strategy, we integrated the ROS scavenger NAC as an emergency brake to rapidly terminate transgene expression within 30 min.

![Figure 3. A multi-compound gene expression control platform](/images/research/research-fig3-en-v2.png)

**Innovative value:** This work breaks the receptor-dependent paradigm and establishes a universal redox-signal-based small-molecule-to-gene interface for:
1. Multimodal combination gene therapy;
2. High-throughput drug screening and toxicity assessment;
3. Intelligent biomaterials with environment-responsive functions.

**Article:** [https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/advs.202306333](https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/advs.202306333)

### IV. An Aspirin-Controlled Gene Platform for Glycemic Control and Suppression of Inflammation and Neuropathic Pain in Diabetic Complications

A major challenge in synthetic biology and precision medicine is building gene-control systems that are safe, precise, and clinically operable. Existing small-molecule switches are often limited by cytotoxicity, resistance, off-target effects, side effects, and complex pharmacokinetics. We therefore focused on aspirin (acetylsalicylic acid, ASA), a drug with over a century of safe clinical use and broad therapeutic profiles.

Using cross-species receptor engineering and directed evolution, we built a dual-mode aspirin-inducible gene switch in mammalian cells. Core innovations include:
1. Mammalian adaptation of plant salicylic acid receptors NPR1/NPR4: membrane-anchored Myr-NPR1 mutant prevents nuclear translocation, while NPR4 mutant fused to VanR and VP16 forms an ASA-dependent nuclear translocation complex. Without ASA, the complex remains membrane-sequestered and suppresses downstream genes; with ASA, complex dissociation activates therapeutic transgene expression.
2. Domain analysis plus high-throughput mutational screening generated high-sensitivity variants responsive to ASA, SA, and metabolites such as 2,3-DHBA and SAADG, extending effective in vivo control.
3. An orthogonal off-switch using vanillic acid competitively disrupts VanR-DNA binding, enabling shutdown within ~30 min.

In chronic diabetic-complication models (sustained hyperglycemia >4 months with neuropathy/inflammation), this system showed multidimensional efficacy. In mice implanted with engineered cells, daily oral ASA (100 mg/kg) precisely controlled insulin secretion and normalized blood glucose. At the same time, ASA's intrinsic anti-inflammatory effects significantly reduced inflammatory markers (including IL-1beta, IL-6, TNF-alpha, IFN-gamma), as well as pain-related biomarkers such as CGRP and MCP1. Importantly, emergency shutdown by vanillic acid can rapidly suppress insulin expression, reducing risk from irreversible overexpression.

![Figure 4. Aspirin-mediated gene regulation system](/images/research/research-fig4-en-v2.png)

Clinical translation value is reflected in three aspects:
1. Exploiting ASA metabolic networks to extend activation via metabolites;
2. Modular architecture for rapid adaptation to new therapeutic targets;
3. Direct compatibility with existing oral-drug infrastructures for cell and gene therapy.

**Article:** [https://www.nature.com/articles/s41467-025-57275-x](https://www.nature.com/articles/s41467-025-57275-x)

**BioArt coverage:** [https://mp.weixin.qq.com/s/V_ACg3CIU8F4VEtstYkSEA](https://mp.weixin.qq.com/s/V_ACg3CIU8F4VEtstYkSEA)

### V. Directed Evolution and Protein Engineering of Ultrashort-Peptide Gene Switches for Signal Amplification and Precision Metabolic Control

Short peptides (5-30 amino acids) offer unique advantages for gene regulation, including compact size, simple structure, synthetic accessibility, scalability, facile modification, low immunogenicity, high membrane permeability, and favorable metabolic safety. Developing peptide-inducible gene switches for therapeutic protein control therefore has strong translational potential in personalized and precision medicine.

Based on the Streptococcus mutans ComR-XIP pathway, we built the first mammalian octapeptide/hexapeptide dual-mode gene switch through a three-level engineering strategy:
1. **Receptor reconstruction**: ComR fused with a transcriptional activator and paired with synthetic OComR promoters; intracellular octapeptide XIP (VPFFMIYY) induced ComR-TA dimerization and gene activation.
2. **Membrane-localization enhancement**: membrane anchoring plus directed evolution (>10^4 mutant libraries) yielded a high-sensitivity variant with ~23-fold sensitivity improvement.
3. **Minimal-peptide design**: functional core mapping enabled a six-peptide regulatory element (VPFFYY).
4. **Therapeutic validation**: in diabetic models, engineered cells stimulated by XIP or ID3 expressed insulin and maintained glycemic homeostasis.
5. **Strong safety profile**: neither octapeptides nor hexapeptides induced detectable immunogenicity in 28-day dosing and standardized immunization assays.

![Figure 5. Peptide-regulated gene expression system](/images/research/research-fig5-en-v2.png)

This platform provides another safe and reliable option for gene therapy in personalized medicine and establishes a strong experimental basis for peptide-based therapeutics with high biocompatibility, orthogonality, and minimal cytotoxicity/immunogenicity.

**Article:** [https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/advs.202309411](https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/advs.202309411)

{{< research-carousel >}}
